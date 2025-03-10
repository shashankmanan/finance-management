import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItemView({item}) {

  const {symbol,name,buy_price,invested_amt,quantity} = item
  const slugname = name.toLowerCase().replaceAll(" ","_")

  return (
    <div style={{display:'flex', flexDirection:'row' , justifyContent:"space-evenly",alignItems:"center"}}>
            <div>
                <h3>{name}</h3>
                <h4>{quantity}</h4>
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:"column", margin:"10px"}}>
                    <h4>Invested</h4>
                    <h4>{invested_amt}</h4>
                </div>
                <div style={{display:'flex',flexDirection:"column",margin:"5px"}}>
                <h4>Current</h4>
                <h4>1000</h4>
                </div>
                <div style={{display:'flex',flexDirection:"column"}}>
                <h4>Buy_Price</h4>
                <h4>{buy_price}</h4>
                </div>
                
            </div>
            <div>
                <Link to={`/stockyoda/stocksandetfs/${slugname}/view`} state={{stockData: item}}>
                    <button style={{margin: "5px"}}>View</button>
                </Link>
                <button>Edit</button>
            </div>
    </div>
  )
}
