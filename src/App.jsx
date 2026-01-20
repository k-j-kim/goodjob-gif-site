import { useState } from 'react'
import GoodJobGif from './components/GoodJobGif'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <GoodJobGif />
      </div>
    </div>
  )
}

export default App
