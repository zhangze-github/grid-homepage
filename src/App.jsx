import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import MyFirstGrid from './page/home/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyFirstGrid />
    </div>
  )
}

export default App
