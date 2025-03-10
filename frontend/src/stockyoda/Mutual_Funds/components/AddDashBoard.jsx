import React, {  useState } from "react";
import {addAPurchasedMf} from "../../API/mfs"

export default function AddDashBoard({ update }) {
  const updateFields = () => {

    setName("")
    setCategory("")
    setTotalAmt("")
  }
  const clickHandler = async () => {
    if (name === "" || name === null) {
      alert("Enter Name");
      return;
    }
    if (total_amt === "" || total_amt === null) {
      alert("Enter total amount");
      return;
    }
    const newPayload = {
      "name": name,
      "invested_amt": Number(total_amt),
      "category" : category
    };

    console.log("payload_set" , newPayload);
    let response = ""
    if(newPayload.name == "" || newPayload.buy_price == 0 || newPayload.quantity == 0 || newPayload.total_amt == 0)
        return
    response = await addAPurchasedMf(newPayload) 
    if (response === "SUCCESFULLY_CREATED") {
      setAdded(true);
      update();
      updateFields()
    }
  };

  const [name, setName] = useState("");
  const [total_amt, setTotalAmt] = useState("");
  const [added, setAdded] = useState(false);
  const [category,setCategory] = useState("");

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row",width:"110%" ,justifyContent:"space-evenly"}}>
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
          <h5>Total_amt:</h5>
          <input
            type="text"
            value={total_amt}
            onChange={(e) => setTotalAmt(e.target.value)}
            style={{height:"30px" ,width:"200px"}}
          />
        </div>
        <div>
            <h5>Category:</h5>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{height:"30px" ,width:"200px"}}
            />
          </div>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                <h5>Buy-date:</h5>
            <input
                type="date"
                value={buy_date}
                onChange={(e) => setBuyDate(e.target.value)}
                style={{height:"30px" ,width:"200px"}}
            />
            </div> */}
        {/* </div> */}
      <button onClick={clickHandler}>Add+</button>
      {added == true ? <p>added!</p> : <></>}
    </>
  );
}
