import React from 'react'
import stockYodaLogo from "../../assets/stockyoda.jpg"
import { Link } from 'react-router-dom'

export default function StockYodaLogo() {
  return (
    <div style={{display:"flex" , alignItems:"center",justifyContent:"center"}}>
        <Link to="/stockyoda"><h1>Stockyoda!</h1></Link>
        <img src={stockYodaLogo} className="logo" alt="Stock Yoda logo" />
    </div>
  )
}
