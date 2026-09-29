import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function SignalField() {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // Rotación sutil simulando un campo de transmisión
    meshRef.current.rotation.z = t * 0.05
    meshRef.current.rotation.x = 1.2 + Math.sin(t * 0.2) * 0.1
  })

  return (
    <mesh ref={meshRef} position={[0, -2, -5]}>
      <planeGeometry args={[30, 30, 40, 40]} />
      <meshBasicMaterial 
        color="#0085B2" 
        wireframe={true} 
        transparent={true} 
        opacity={0.15} 
      />
    </mesh>
  )
}
