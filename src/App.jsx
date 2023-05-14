import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Donor from "./Donor";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/donor" element={<PrivateRoute />}>
          <Route index element={<Donor />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
