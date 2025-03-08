import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import finvestoryLogo from "./assets/finvestory.png"
import finMonkeyLogo from "./assets/finmonkey.jpg"
import stockYodaLoo from "./assets/stockyoda.jpg"

import {Link} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
      <a href="/#/" target="_blank">
          <img src={finvestoryLogo} className="logo" alt="Vite logo" style={{height:"10em"}}/>
        </a></nav>    
      <div style={{display:'flex'}}>
        <div>
        <Link to="/stockyoda">
          <img src={stockYodaLoo} className="logo" alt="Vite logo" style={{height:"10em"}}/>
        </Link>
        <p>Stock Yoda</p>
        </div>
        <div>
        <Link to="/finmonkey">
          <img src={finMonkeyLogo} className="logo react" alt="Fin monkey logo" style={{height:"10em"}}/>
        </Link>
        <p>FinMonkey</p>
        </div>
      </div>
      </>
  )
}

export default App
