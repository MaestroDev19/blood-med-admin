import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import PrivateRoute from './components/PrivateRoute'
import CreateAdmin from './CreateAdmin'
export default function App(){
  
  
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element= {<Login />}/>
            <Route exact path="/create" element ={<CreateAdmin/>}/>
            <Route path="/overview" element={<PrivateRoute />}>
              <Route index element={<Dashboard />} />
            </Route>
        </Routes>
      </BrowserRouter>
    )
}