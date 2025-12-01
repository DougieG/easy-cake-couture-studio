'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { 
  useGLTF, 
  Stage, 
  PresentationControls, 
  Float,
  ContactShadows,
  Environment,
  RoundedBox,
  Cylinder,
  Text
} from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function PrinterModel(props: any) {
  const meshRef = useRef<THREE.Group>(null)
  const fabricRef = useRef<THREE.Mesh>(null)
  const fabricTexture = useFabricTexture()
  
  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    
    if (fabricRef.current) {
      // Fabric extrusion animation
      // Move from z=0.5 to z=2.5 over time, then reset
      const time = state.clock.elapsedTime * 0.5
      const progress = time % 1
      // Smooth step for restart
      const zPos = 0.5 + (progress * 2.5)
      fabricRef.current.position.z = zPos
      
      // Scale up slightly as it comes out
      const scale = Math.min(1, progress * 5)
      fabricRef.current.scale.set(1, 1, scale)
      
      // Waving motion
      fabricRef.current.rotation.x = -0.5 + Math.sin(time * 5 + zPos) * 0.05
    }
  })

  return (
    <group ref={meshRef} {...props}>
      {/* Main Body - Friendly Rounded Design */}
      <RoundedBox args={[4, 2.5, 3]} radius={0.2} smoothness={4}>
        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
      </RoundedBox>

      {/* Top Accent Panel (Pink) */}
      <RoundedBox args={[3.8, 0.1, 2.8]} radius={0.1} smoothness={4} position={[0, 1.26, 0]}>
        <meshStandardMaterial color="#ec4899" roughness={0.2} metalness={0.1} />
      </RoundedBox>

      {/* Front Output Slot */}
      <group position={[0, -0.5, 1.51]}>
        {/* Slot indentation */}
        <RoundedBox args={[2.5, 0.2, 0.1]} radius={0.05} smoothness={2}>
          <meshStandardMaterial color="#333" roughness={0.8} />
        </RoundedBox>
        
        {/* Ejecting Fabric */}
        <mesh 
          ref={fabricRef}
          position={[0, -1, 0.5]} 
          rotation={[-0.5, 0, 0]}
        >
          <planeGeometry args={[2, 2.5, 10, 10]} />
          <meshStandardMaterial 
            side={THREE.DoubleSide}
            map={fabricTexture}
          />
        </mesh>
      </group>

      {/* UI Buttons */}
      <group position={[1.2, 1.26, 0.8]}>
        <Cylinder args={[0.15, 0.15, 0.2, 32]} position={[0, 0.05, 0]}>
          <meshStandardMaterial color="#fbbf24" />
        </Cylinder>
        <pointLight intensity={0.5} color="#fbbf24" distance={0.5} />
      </group>
      
      <group position={[0.8, 1.26, 0.8]}>
        <Cylinder args={[0.15, 0.15, 0.2, 32]} position={[0, 0.05, 0]}>
          <meshStandardMaterial color="#a855f7" />
        </Cylinder>
      </group>

      {/* Brand Logo Text */}
      <Text
        position={[0, 0.2, 1.51]}
        fontSize={0.3}
        color="#ec4899"
        anchorX="center"
        anchorY="middle"
      >
        Easy Cake
      </Text>
      <Text
        position={[0, -0.1, 1.51]}
        fontSize={0.15}
        color="#999"
        anchorX="center"
        anchorY="middle"
      >
        COUTURE STUDIO
      </Text>
    </group>
  )
}

// Procedural texture generation for the fabric
function useFabricTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (ctx) {
    // Pink background
    ctx.fillStyle = '#fce7f3'
    ctx.fillRect(0, 0, 512, 512)
    
    // Pattern
    ctx.fillStyle = '#ec4899'
    for(let i=0; i<20; i++) {
      ctx.beginPath()
      ctx.arc(Math.random() * 512, Math.random() * 512, 10 + Math.random() * 20, 0, Math.PI * 2)
      ctx.fill()
    }
    
    // Stripes
    ctx.strokeStyle = '#a855f7'
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(512, 512)
    ctx.stroke()
  }
  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

export function Device3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <group position={[0, -0.5, 0]}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Float rotationIntensity={0.4} floatIntensity={0.6} speed={2}>
              <PrinterModel />
            </Float>
          </PresentationControls>
          
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={4} 
          />
          
          <Environment preset="city" />
          
          {/* Dramatic Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1} 
            castShadow 
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        </group>
      </Canvas>
      
      {/* Overlay UI */}
      <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-gray-500 border border-gray-200 pointer-events-none">
        Click & Drag to Rotate 360°
      </div>
    </div>
  )
}
