import { Canvas } from 'react-three-fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import './App.css'

import Box from './components/Box'
import Plane from './components/Plane'

function App() {

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Box />
      <Plane />
    </Canvas>
  )
}

export default App
