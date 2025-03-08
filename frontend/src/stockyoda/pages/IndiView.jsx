import React from 'react'
import StockYodaLogo from '../components/StockYodaLogo'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function IndiView() {
    const location = useLocation()
    const item = location.state?.stockData
    const {name,buy_price,quantity,invested_amt,category} = item

    return (
    <div>
        <div >
            <StockYodaLogo />
        </div>
        
        <div style={{display: "flex" , flexDirection:"row" , justifyContent:"space-between"}}>
            <h2></h2>
            <h2>{name}</h2>
        </div>
        <div>
            <Link to="/stockyoda/stocks">
                <h3>Back to All Stocks</h3>
            </Link>
        </div>
        <div>
            <h1>Particulars:</h1>
            <table>
                <tbody>
                <tr>
                    <td><h3>Name:</h3></td>
                    <td><h3>{name}</h3></td>
                </tr>
                <tr>
                    <td><h3>Quantity:</h3></td>
                    <td><h3>{quantity}</h3></td>
                </tr>
                <tr>
                    <td><h3>Buy_Price:</h3></td>
                    <td><h3>{buy_price}</h3></td>
                </tr>
                <tr>
                    <td><h3>Total Invested:</h3></td>
                    <td><h3>{invested_amt}</h3></td>
                </tr>
                <tr>
                    <td><h3>Sector:</h3></td>
                    <td><h3>{category}</h3></td>
                </tr>
                
                </tbody>
            </table>
        </div>

        <div>
            <Link to="/stockyoda/stocks">
                <h3>Back to All Stocks</h3>
            </Link>
        </div>
    </div>
  )
}
