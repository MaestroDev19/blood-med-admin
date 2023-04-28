import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Donor from './Donor'
import Donation from './Donation'
import BloodInventory from './BloodInventory'
import {useState, useEffect} from 'react'
import PrivateRoute from './components/PrivateRoute'
import { auth } from './components/Firebase'
import Loading from './components/Loading'
import Appointment from'./Appointment'
export default function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
     if (loading) {
     return(<>
      <Loading/>
     </>)
  }
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element= {<Login />}/>
            <Route exact path="/overview" element = {<Dashboard />}/>
            <Route exact path="/donor" element = {<Donor />}/>
            <Route exact path="/donation" element = {<Donation />}/>
            <Route exact path="/appointment" element = {<Dashboard />}/>
            <Route exact path="/inventory" element = {<BloodInventory />}/>
            <Route path="/donor" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
              <Route index element={<Donor />} />
            </Route>
            <Route path="/donation" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
              <Route index element={<Donation />} />
            </Route>
            <Route path="/donor" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
              <Route index element={<Donor />} />
            </Route>
            <Route path="/appointment" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
              <Route index element={<Appointment />} />
            </Route>
            <Route path="/inventory" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
              <Route index element={<BloodInventory />} />
            </Route>
        </Routes>
      </BrowserRouter>
    )
}