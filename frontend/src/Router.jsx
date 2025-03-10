import { HashRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import App from './App'
import Home_Finmonkey from './FinMonkey/pages/Home'
import Home from './stockyoda/pages/Home'
import Stocks from './stockyoda/pages/Stocks'
import ETFS from './stockyoda/pages/ETFS'
import IndiView from './stockyoda/pages/IndiView'
import Overall from './AnalyticsMonkey/pages/Overall'
import Home_MutualFunds from './stockyoda/Mutual_Funds/Pages/Home'
import Stocks_AnaMon from "./AnalyticsMonkey/pages/Stocks"
import Mfs from './AnalyticsMonkey/pages/Mfs'
import Etfs from './AnalyticsMonkey/pages/Etfs'

export default function Router() {
    console.log("in router")
  return (
    <HashRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/finmonkey" element={<Home_Finmonkey />} />
            <Route exact path="/stockyoda" element={<Home />} />
            <Route exact path="/stockyoda/stocks" element={<Stocks />} />
            <Route exact path="/stockyoda/stocksandetfs/:id/view" element={<IndiView />} />
            <Route exact path="/stockyoda/etfs" element={<ETFS />} />
            <Route exact path="/stockyoda/mutualfunds" element={<Home_MutualFunds />} />
            <Route exact path="/analyticsmonkey/overall" element={<Overall />}/>
            <Route exact path="/analyticsmonkey/stocks" element={<Stocks_AnaMon />}/>
            <Route exact path="/analyticsmonkey/etfs" element={<Mfs />}/>
            <Route exact path="/analyticsmonkey/mutualfunds" element={<Etfs />}/>

        </Routes>
    </HashRouter>
  )
}
