import React from 'react'
import analyticsMonkeyLogo from "../../assets/analyticsmonkey.jpg"
import { Link } from 'react-router-dom'

export default function AnalyticsMonkeyLogo() {
  return (
    
    <div style={{display:"flex" , alignItems:"center",justifyContent:"center"}}>
        <Link to="/analyticsmonkey/overall"><h1>Analytics Monkey!</h1></Link>
        <img src={analyticsMonkeyLogo} className="logo" alt="Stock Yoda logo" />
    </div>

  )
}
