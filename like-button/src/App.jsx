import { useState } from 'react'
import './App.css'
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learning States in React</h1>
      <h1>************************</h1>
      <LikeButton/>
      <h1>************************</h1>
      
    </>
  )
}

export default App
