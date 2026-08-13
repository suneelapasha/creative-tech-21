import { Canvas } from '@react-three/fiber'
import { CatmullRomCurve3, Vector3 } from 'three'


function App() {

    const curve = new CatmullRomCurve3([
    new Vector3(-2, 0, 0),
    new Vector3(2, 0, 0)
  ])


  return (
   <div id='canvas-container'>
      <Canvas >
        <mesh>
          <tubeGeometry args={[curve, 64, 0.5, 8, false]} />
          <meshBasicMaterial color="hotpink" wireframe/>
        </mesh>
      </Canvas>

    </div>
  )
}

export default App
