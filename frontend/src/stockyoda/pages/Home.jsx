import React, { useEffect, useState } from 'react'
import Dashboard from '../../stockyoda/components/Dashboard'
import { Link } from 'react-router-dom'
import finvestoryLogo from "../../assets/finvestory.png"
import stockYodaLogo from "../../assets/stockyoda.jpg"
import { getTotalStockInvestedAmount } from '../API/stocks'
import { getTotalEtfInvestedAmount } from '../API/etfs'
import { getTotalMfInvestedAmount } from '../API/mfs'

export default function Home() {
    const [stockInvestedAmount,setStockInvestedAmount] = useState(0)
    const [etfInvestedAmount,setEtfInvestedAmount] = useState(0)
    const [mfInvestedAmount,setMfInvestedAmount] = useState(0)
    const [overallInvestedAmount,setOverallInvestedAmount] = useState(0)
    const updateDashboards = async () => {
        const investedStockAmt = await getTotalStockInvestedAmount()
        setStockInvestedAmount(investedStockAmt)
        const investedEtfAmt = await getTotalEtfInvestedAmount()
        setEtfInvestedAmount(investedEtfAmt)
        const investedMfAmt = await getTotalMfInvestedAmount()
        setMfInvestedAmount(investedMfAmt)
        const overallInvestTemp = stockInvestedAmount + etfInvestedAmount + mfInvestedAmount
        setOverallInvestedAmount(overallInvestTemp)
    }
    useEffect(
        () => {
            updateDashboards()
        }
    )

  return (
    <div>
        <nav >
            <Link to="/" >
                <img src={finvestoryLogo} className="logo" alt="Finvestory logo" />
            </Link>
            <img src={stockYodaLogo} className="logo" alt="Finvestory logo" />
        </nav> 
        <div className='overall'>
            <h2>Overall</h2>
            <Dashboard category="overall" invested={overallInvestedAmount} selfpage={true}/>
        </div>
        <div className='stocks'>
            <h2>Stocks:</h2>
            <Dashboard category="stocks" invested={stockInvestedAmount} selfpage={true}/>
        </div>
        <div className='etfs'>
            <h2>ETFs:</h2>
            <Dashboard category="etfs" invested={etfInvestedAmount} selfpage={true}/>
        </div>
        <div className='mutual_funds'>
            <h2>Mutual Funds:</h2>
            <Dashboard category="mutualfunds" invested={mfInvestedAmount} selfpage={true}/>
        </div>
    </div>
  )
}
