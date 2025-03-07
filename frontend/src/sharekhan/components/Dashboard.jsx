import React from 'react'
import { Link } from 'react-router-dom'


export default function Dashboard({category,selfpage}) {
//   selfpage = selfpage? "false" : "true"
    return (
    <div>
        <div className='overall_dashboard' style={{width:"1000px",display:'flex',flexDirection:'row',justifyContent:"space-evenly"}}>
            <div className='invested'>
                <h2>Invested:</h2>
                <h5>10000</h5>
            </div>
            <div className='current'>
                <h2>Current:</h2>
                <h5>10000</h5>
            </div>
            <div className='projected' style={{display:"flex",flexDirection:"column"}}>
                <h2>Projected:</h2>
                <span>1000</span>
                <div>
                    <button>1y</button>
                    <button style={{margin:"4px"}}>3y</button> 
                    <button>5y</button>                      
                </div>
            </div>
            
        </div>
        { selfpage != "false" ? 
        <h3>Explore more in <Link to={`/sharekhan/${category}`}>{category} =~</Link></h3>
        : <></>
        }
    </div>
  )
}
