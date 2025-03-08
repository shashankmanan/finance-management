import React, { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'
import AddAsset from '../components/AddAsset'
import List from '../components/List'
import { Link } from 'react-router-dom'
import { getAllBoughtEtfData, getTotalEtfInvestedAmount } from '../API/etfs'
import StockYodaLogo from '../components/StockYodaLogo'

export default function ETFS() {
  const [list,setList] = useState([])
  const [totalInvested,setTotalInvested] = useState(0)

  const updateEtfsList = async () => {
    const data = await getAllBoughtEtfData()
      if (!data) {
        alert("Data not available");
        return;
      }
      console.log(data)
      setList(data);
      let amt = getTotalEtfInvestedAmount()
      
      setTotalInvested(amt)
    };

    useEffect( () => {
        updateEtfsList()
        console.log(list)
    } , [])
  return (
    <div>
        <StockYodaLogo />
        <h2>My Etfs</h2>
        <Dashboard category="etfs" selfpage="false" invested={totalInvested}/>
        <AddAsset update={updateEtfsList} category="etfs"/> 
        <h3>List:</h3>
        <List list={list}/>
    </div>
  )
}
