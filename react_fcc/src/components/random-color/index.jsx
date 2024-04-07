import { useState } from 'react'

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#00000')

  return (
    <div
      className="App"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,
      }}
    >
      <button>Create HEX Color</button>
      <button>Create RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  )
}
