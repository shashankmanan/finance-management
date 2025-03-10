import AnalyticsMonkeyLogo from '../components/AnalyticsMonkeyLogo'
import { Link } from 'react-router-dom'
import stockDivide from '../assets/stocks_pie_chart.png'
import sectorDivide from '../assets/stocks_sector_pie_chart.png'

export default function Stocks() {
    
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
        <h1>Stocks</h1>
    </div>
    <div> 
        <h4>Total Stocks divide</h4>
        <img src={stockDivide} alt="portfolio Chart" height="900px"/>
    </div>
    <div> 
        <h4>Total Sector wise divide</h4>
        <img src={sectorDivide} alt="portfolio Chart" height="900px"/>
    </div>
</div>

  )
}
