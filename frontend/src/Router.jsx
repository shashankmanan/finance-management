import { HashRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import App from './App'
import Home_FDK from './FinDonkey/pages/Home_FDK'
import Home from './sharekhan/pages/Home'
import Stocks from './sharekhan/pages/Stocks'

export default function Router() {
    console.log("in router")
  return (
    <HashRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/findonkey" element={<Home_FDK />} />
            <Route exact path="/sharekhan" element={<Home />} />
            <Route exact path="/sharekhan/stocks" element={<Stocks />} />
        </Routes>
    </HashRouter>
  )
}
