import { HashRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import App from './App'
import Home_Finmonkey from './FinMonkey/pages/Home'
import Home from './stockyoda/pages/Home'
import Stocks from './stockyoda/pages/Stocks'
import ETFS from './stockyoda/pages/ETFS'
import IndiView from './stockyoda/pages/IndiView'

export default function Router() {
    console.log("in router")
  return (
    <HashRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/finmonkey" element={<Home_Finmonkey />} />
            <Route exact path="/stockyoda" element={<Home />} />
            <Route exact path="/stockyoda/stocks" element={<Stocks />} />
            <Route exact path="/stockyoda/stocks/:id/view" element={<IndiView />} />
            <Route exact path="/stockyoda/etfs" element={<ETFS />} />

        </Routes>
    </HashRouter>
  )
}
