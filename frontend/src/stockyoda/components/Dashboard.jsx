import React from 'react'
import { Link } from 'react-router-dom'


export default function Dashboard({category,selfpage,invested}) {
    
    return (
    <div>
        <div className='overall_dashboard' style={{width:"1000px",display:'flex',flexDirection:'row',justifyContent:"space-evenly"}}>
            <div className='invested'>
                <h2>Invested:</h2>
                <h5>{invested}</h5>
            </div>
            <div className='current'>
                <h2>Current:</h2>
                <h5>0</h5>
            </div>
            <div className='projected' style={{display:"flex",flexDirection:"column"}}>
                <h2>Projected:</h2>
                <span>0</span>
                <div>
                    <button>1y</button>
                    <button style={{margin:"4px"}}>3y</button> 
                    <button>5y</button>                      
                </div>
            </div>
            
        </div>
        { selfpage != "false" ? 
        <h3>Explore more in <Link to={`/stockyoda/${category}`}>{category} =~</Link></h3>
        : <></>
        }
    </div>
  )
}
