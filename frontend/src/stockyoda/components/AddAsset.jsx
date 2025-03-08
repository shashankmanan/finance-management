import React, {  useState } from "react";
import { addAPurchasedStock } from "../API/stocks";
import { addAPurchasedEtf } from "../API/etfs";

export default function AddAsset({ update, category }) {
  const updateFields = () => {
    setSymbol("")
    setName("")
    setBuyPrice("")
    setEtfCategory("")
    setQuantity("")
    setTotalAmt("")
  }
  const clickHandler = async () => {
    if (name === "" || name === null) {
      alert("Enter Name");
      return;
    }
    if (buy_price === "" || buy_price === null) {
      alert("Enter buy_price");
      return;
    }
    if (quantity === "" || quantity === null) {
      alert("Enter quantity");
      return;
    }
    if (total_amt === "" || total_amt === null) {
      alert("Enter total amount");
      return;
    }
    const newPayload = {
      "symbol": symbol,
      "name": name,
      "buy_price": Number(buy_price),
      "quantity": Number(quantity),
      "total_amt": Number(total_amt),
      "buy_date": buy_date,
      "category" : etfCategory
    };
    console.log("payload_set");
    let response = ""
    if(newPayload.name == "" || newPayload.buy_price == 0 || newPayload.quantity == 0 || newPayload.total_amt == 0)
        return
    if(category == "etfs") {
        response = await addAPurchasedEtf(newPayload);
    }
    else {
        response = await addAPurchasedStock(newPayload);
    }
    if (response === "SUCCESFULLY_CREATED") {
      setAdded(true);
      update();
      updateFields()
    }
  };
  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [buy_price, setBuyPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total_amt, setTotalAmt] = useState("");
  const [buy_date, setBuyDate] = useState("");
  const [added, setAdded] = useState(false);
  const [etfCategory,setEtfCategory] = useState("");

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row",width:"110%" ,justifyContent:"space-between"}}>
        <div>
          <h5>Symbol:</h5>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            style={{height:"30px" ,width:"200px"}}
          />
        </div>
        <div>
          <h5>Name:</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{height:"30px" ,width:"220px"}}
          />
        </div>
        <div>
          <h5>Buy_price:</h5>
          <input
            type="text"
            value={buy_price}
            onChange={(e) => setBuyPrice(e.target.value)}
            style={{height:"30px" ,width:"200px"}}
          />
        </div>
        <div>
          <h5>Quantity:</h5>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{height:"30px" ,width:"200px"}}
          />
        </div>
        <div>
          <h5>Total_amt:</h5>
          <input
            type="text"
            value={total_amt}
            onChange={(e) => setTotalAmt(e.target.value)}
            style={{height:"30px" ,width:"200px"}}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h5>Buy-date:</h5>
          <input
            type="date"
            value={buy_date}
            onChange={(e) => setBuyDate(e.target.value)}
            style={{height:"30px" ,width:"200px"}}
          />
        </div>
        
          <div>
            <h5>Category:</h5>
            <input
              type="text"
              value={etfCategory}
              onChange={(e) => setEtfCategory(e.target.value)}
              style={{height:"30px" ,width:"200px"}}
            />
          </div>
        
      </div>
      <button onClick={clickHandler}>Add+</button>
      {added == true ? <p>added!</p> : <></>}
    </>
  );
}
