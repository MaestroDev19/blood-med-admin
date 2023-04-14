import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App(){
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element= {<Login />}/>
            <Route exact path="/home" element = {<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    )
}