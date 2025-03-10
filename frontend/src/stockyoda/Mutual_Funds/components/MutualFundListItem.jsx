import React from 'react'

export default function MutualFundListItem({item}) {
    const {name,invested_amt,category} = item
//   const slugname = name.toLowerCase().replaceAll(" ","_")
    console.log(item)
  return (
    <div style={{display:'flex', flexDirection:'row' , justifyContent:"space-evenly",alignItems:"center"}}>
            <div>
                <h3>{name}</h3>
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:"column", margin:"10px"}}>
                    <h4>Invested:</h4>
                    <h4>{invested_amt}</h4>
                </div>
                <div style={{display:'flex',flexDirection:"column",margin:"5px"}}>
                <h4>Current</h4>
                <h4>1000</h4>
                </div>
            </div>
            <div>
                {/* <Link to={`/stockyoda/stocksandetfs/${slugname}/view`} state={{stockData: item}}> */}
                    <button style={{margin: "5px"}}>View</button>
                {/* </Link> */}
                <button>Edit</button>
            </div>
    </div>
  )
}
