import React from 'react'
import './App.css'
import { FadeInOut } from './FadeInOut'
import { FadeInOutByCSS } from './FadeInOutByCSS'

function App() {
  return (
    <div className="App">
      <FadeInOut />
      <FadeInOutByCSS />
    </div>
  )
}

export default App
