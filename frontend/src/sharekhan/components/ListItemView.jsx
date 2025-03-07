import React from 'react'

export default function ListItemView() {
  return (
    <div style={{display:'flex', flexDirection:'row' , justifyContent:"space-evenly",alignItems:"center"}}>
            <div>
                <h3>Aditya Birla Cap</h3>
                <h4>10</h4>
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:"column", margin:"10px"}}>
                    <h4>Invested</h4>
                    <h4>1000</h4>
                </div>
                <div style={{display:'flex',flexDirection:"column"}}>
                <h4>Current</h4>
                <h4>1000</h4>
                </div>
                
            </div>
            <div>
                <button>View</button>
            </div>
    </div>
  )
}
