import AnalyticsMonkeyLogo from '../components/AnalyticsMonkeyLogo'
import { Link } from 'react-router-dom'
import portfolioDivide from "../assets/overall_portfolio_invesment_distri.png" 
import overallDivide from "../assets/individual_portfolio_pie_chart.png"

export default function Overall() {
    
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "10px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
    }}>
        <Link to="/stockyoda">
            <h4 style={{ marginRight: "auto" }}>Back to Stock Yoda</h4>
        </Link>
        <AnalyticsMonkeyLogo />
        
    </div>

    <div style={{ marginTop: "60px", textAlign: "left", padding: "10px" }}>
        <h1>Overall</h1>
    </div>
    <div> 
        <h4>Total portfolio divide</h4>
        <img  src={portfolioDivide} alt="portfolio Chart"/>
        <h4>Overall portolio divide</h4>
        <img  src={overallDivide} alt="portfolio Chart" height="900px"/>
    </div>
</div>

  )
}
