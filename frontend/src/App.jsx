import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import finvestoryLogo from "./assets/finvestory.png"
import {Link} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
      <a href="/#/" target="_blank">
          <img src={finvestoryLogo} className="logo" alt="Vite logo" />
        </a></nav>    
      <div style={{display:'flex'}}>
        <div>
        <Link to="/sharekhan">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <p>ShareKhan</p>
        </div>
        <div>
        <Link to="/findonkey">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
        <p>FinDonkey</p>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </>
  )
}

export default App
