import { Canvas } from 'react-three-fiber'
import './App.css'

import Box from './components/Box'

function App() {

  return (
    <div className="App">
      <h1>React 3D</h1>
      <Canvas>
        <Box />  
      </Canvas>
    </div>
  )
}

export default App
