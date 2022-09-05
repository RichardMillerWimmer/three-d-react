import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'

import Box from './components/Box'

function App() {

  return (
    <div className="App">
      <h1>React 3D</h1>
      <Canvas>
        <OrbitControls />
        <Box />
      </Canvas>
    </div>
  )
}

export default App
