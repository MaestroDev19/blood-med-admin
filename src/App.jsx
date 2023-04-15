import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Donor from './Donor'
import Donation from './Donation'
import BloodInventory from './BloodInventory'
export default function App(){
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element= {<Login />}/>
            <Route exact path="/overview" element = {<Dashboard />}/>
            <Route exact path="/donor" element = {<Donor />}/>
            <Route exact path="/donation" element = {<Donation />}/>
            <Route exact path="/appointment" element = {<Dashboard />}/>
            <Route exact path="/inventory" element = {<BloodInventory />}/>
        </Routes>
      </BrowserRouter>
    )
}