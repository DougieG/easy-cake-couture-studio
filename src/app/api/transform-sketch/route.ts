import Replicate from 'replicate'
import { NextRequest, NextResponse } from 'next/server'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const imageFile = formData.get('image') as File
    const style = formData.get('style') as string || 'glamorous haute couture'
    
    if (!imageFile) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      )
    }

    const token = process.env.REPLICATE_API_TOKEN
    console.log('Token exists:', !!token, 'Length:', token?.length || 0)
    
    if (!token) {
      return NextResponse.json(
        { error: 'Replicate API token not configured', env: Object.keys(process.env).filter(k => k.includes('REPLICATE')) },
        { status: 500 }
      )
    }

    // Convert image to base64 data URI
    const bytes = await imageFile.arrayBuffer()
    const base64Image = Buffer.from(bytes).toString('base64')
    const mimeType = imageFile.type || 'image/png'
    const imageDataUri = `data:${mimeType};base64,${base64Image}`

    const prompt = `Transform this child's dress sketch into a stunning photorealistic ${style} garment, masterpiece quality.
CRITICAL: Preserve the EXACT colors, patterns, stripes, shapes and design elements from the original sketch.
Maintain the same silhouette, color palette (including any rainbow, multicolor, or specific hues), and all decorative details exactly as drawn.
Render as a real luxurious haute couture dress with silk, satin, or velvet fabric textures.
Ultra high-end fashion photography, perfect studio lighting, pure white seamless background, Vogue magazine cover quality, 8K detail.`

    // Use SDXL img2img with version ID - MAX QUALITY settings
    const prediction = await replicate.predictions.create({
      version: "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      input: {
        prompt: prompt,
        image: imageDataUri,
        num_outputs: 1,
        scheduler: "K_EULER",
        num_inference_steps: 50,
        guidance_scale: 8.5,
        prompt_strength: 0.55,
        negative_prompt: "ugly, blurry, low quality, distorted, sketch lines, crayon, childish, amateur, watermark, text, logo, bad anatomy, deformed",
        refine: "expert_ensemble_refiner",
        high_noise_frac: 0.85,
        width: 1024,
        height: 1024,
      }
    })

    // Wait for the prediction to complete
    let result = await replicate.predictions.get(prediction.id)
    
    // Poll until complete (max 60 seconds)
    const maxWait = 60000
    const startTime = Date.now()
    
    while (result.status !== 'succeeded' && result.status !== 'failed') {
      if (Date.now() - startTime > maxWait) {
        throw new Error('Generation timed out')
      }
      await new Promise(resolve => setTimeout(resolve, 1000))
      result = await replicate.predictions.get(prediction.id)
    }

    if (result.status === 'failed') {
      const errorMsg = typeof result.error === 'string' ? result.error : JSON.stringify(result.error) || 'Generation failed'
      throw new Error(errorMsg)
    }

    // Log the output for debugging
    console.log('Replicate result:', JSON.stringify(result.output, null, 2))

    // Output should be an array of URLs
    const output = result.output as string[]
    
    if (output && Array.isArray(output) && output.length > 0 && typeof output[0] === 'string') {
      return NextResponse.json({
        success: true,
        image: output[0],
        description: `Generated ${style} dress design`
      })
    }

    return NextResponse.json({
      success: false,
      message: 'No valid image URL was generated',
      debug: JSON.stringify(result)
    })

  } catch (error) {
    console.error('Transform error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to transform image' },
      { status: 500 }
    )
  }
}
