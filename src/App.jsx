import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import PrivateRoute from './components/PrivateRoute'
export default function App(){
  
  
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element= {<Login />}/>
            <Route path="/overview" element={<PrivateRoute />}>
              <Route index element={<Dashboard />} />
            </Route>
        </Routes>
      </BrowserRouter>
    )
}