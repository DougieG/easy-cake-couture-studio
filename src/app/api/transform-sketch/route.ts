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

    const prompt = `A stunning photorealistic ${style} dress design based on this sketch, high fashion runway garment, luxurious fabric with realistic textures and draping, silk satin velvet material, elegant beading and embroidery details, professional fashion photography, soft studio lighting, clean white background, magazine quality, 8k resolution, maintain the silhouette and design from the sketch`

    // Use SDXL with ControlNet for sketch-to-image transformation
    // This properly uses the sketch as input to guide the generation
    const prediction = await replicate.predictions.create({
      version: "435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
      input: {
        image: imageDataUri,
        prompt: prompt,
        num_outputs: 1,
        image_resolution: "768",
        preprocessor_resolution: "768",
        num_inference_steps: 30,
        guidance_scale: 9,
        low_threshold: 100,
        high_threshold: 200,
        negative_prompt: "ugly, blurry, low quality, distorted, amateur, poorly drawn",
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
