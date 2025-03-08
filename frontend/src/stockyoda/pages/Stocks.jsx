import React, { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'
import AddAsset from '../components/AddAsset'
import List from '../components/List'
import { getAllBoughtStocksData, getTotalStockInvestedAmount } from '../API/stocks'
import StockYodaLogo from '../components/StockYodaLogo'

export default function Stocks() {
  const [list,setList] = useState([])
  const [totalInvested,setTotalInvested] = useState(0)

  const updateStocksList = async () => {
    const data = await getAllBoughtStocksData();
      if (!data) {
        alert("Data not available");
        return;
      }
      console.log(data)
      setList(data);
      const amt = getTotalStockInvestedAmount()
      setTotalInvested(amt)
    };

    useEffect( () => {
        updateStocksList()
        console.log(list)
    } , [])
  return (
    <div>
          <StockYodaLogo />
        <h2>My stocks</h2>
        <Dashboard category="stocks" selfpage="false" invested={totalInvested}/>
        <AddAsset update={updateStocksList} category="stocks"/>
        <h3>List:</h3>
        <List list={list}/>
    </div>
  )
}
