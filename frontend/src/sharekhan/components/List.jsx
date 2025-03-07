import React, { useEffect, useState } from 'react'
import { getAllBoughtStocksData } from '../API/stocks'
import ListItemView from './ListItemView';

export default function List({category}) {
    const [list,setList] = useState([])

    const updateStocksList = async () => {
        const data = await getAllBoughtStocksData(); // ✅ Await here
        if (!data) {
            alert("Data not available");
            return;
        }
        console.log(data)
        setList(data);
    };

    useEffect( () => {
        if(category === "stocks")
            updateStocksList()
        console.log(list)
    } , [])
    return ( 
       <>
            { list.map( (i) => <ListItemView name={i.name} buy_price={i.buy_price} quantity={i.quantity} invested_amt={i.invested_amt}/>) }
       </>
  )
}
