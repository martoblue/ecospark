import { useState } from 'react'
import './App.css'
import VideosComponent from './videos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '1200px' }}>
        <VideosComponent />
      </div>
    </div>
  );
}

export default App
