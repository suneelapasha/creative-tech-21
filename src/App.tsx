import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl?raw'
import fragmentShader from './shaders/fragment.glsl?raw'

function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const { speed, colorShift } = useControls({
    speed: { value: 1.0, min: 0, max: 5, step: 0.1 },
    colorShift: { value: 0.5, min: 0, max: 1, step: 0.01 },
  })

  useFrame((state) => {
    if (!materialRef.current) return
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    materialRef.current.uniforms.uSpeed.value = speed
    materialRef.current.uniforms.uColorShift.value = colorShift
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uSpeed: { value: 1.0 },
          uColorShift: { value: 0.5 },
        }}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', background: '#0a0a0a' }}>
      <ShaderPlane />
    </Canvas>
  )
}