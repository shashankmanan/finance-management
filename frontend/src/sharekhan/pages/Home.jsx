import React from 'react'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div>
        Sharekhan!
        <div className='overall'>
            <h2>Overall</h2>
            <Dashboard category="overall"/>
        </div>
        <div className='stocks'>
            <h2>Stocks:</h2>
            <Dashboard category="stocks"/>
        </div>
        <div className='etfs'>
            <h2>ETFs:</h2>
            <Dashboard category="etfs"/>
        </div>
        <div className='mutual_funds'>
            <h2>Mutual Funds:</h2>
            <Dashboard category="mutualfunds"/>
        </div>
    </div>
  )
}
