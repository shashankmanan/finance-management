import React, { useEffect, useState } from 'react'
import StockYodaLogo from '../../components/StockYodaLogo'
import Dashboard from '../../components/Dashboard'
import MutualFundListItem from '../components/MutualFundListItem'
import AddDashBoard from '../components/AddDashBoard'
import {getAllBoughtMfData,getTotalMfInvestedAmount} from "../../API/mfs"
import MutualFundList from '../components/MutualFundList'

export default function Home() {
  const [list,setList] = useState([])
  const [totalInvested,setTotalInvested] = useState(0)
  
  const updatemfsList = async () => {
      const data = await getAllBoughtMfData();
        if (!data) {
          alert("Data not available");
          return;
        }
        console.log(data)
        setList(data);
        const amt = getTotalMfInvestedAmount()
        setTotalInvested(amt)
      };
      useEffect( () => {
          updatemfsList()
          console.log(list,totalInvested)
          } , [])
  return (
    <div>
        <StockYodaLogo />
        <Dashboard selfpage={false} invested={totalInvested}/>
        <AddDashBoard update={updatemfsList}/>
        <MutualFundList list={list}/>
    </div>
  )
}
