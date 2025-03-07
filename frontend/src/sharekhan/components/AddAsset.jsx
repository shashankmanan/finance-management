import React, { useState } from 'react'

export default function AddAsset() {
  const clickHandler = () => {}
  const [symbol,setSymbol] = useState("")
  const [name,setName] = useState("")
  const [buy_price,setBuyPrice] = useState("")
  const [quantity,setQuantity] = useState("")
  const [total_amt,setTotalAmt] = useState("")
  return (
    <>
    <div style={{display:"flex",flexDirection:"row"}}>
    <div>
      <h5>Symbol:</h5>
      <input type="text" />
    </div>
    <div>
      <h5>Name:</h5>
      <input type="text" />
    </div>
    <div>
      <h5>Buy_price:</h5>
      <input type="text" />
    </div>
    <div>
      <h5>Quantity:</h5>
      <input type="text" />
    </div>
    <div>
      <h5>Total_amt:</h5>
      <input type="text" />
    </div>
  </div>
  <button>Add+</button>
  </>

  )
}
