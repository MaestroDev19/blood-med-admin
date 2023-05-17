import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Donor from "./Donor";
import Profile from "./Profile";
import Blog from "./Blog";
import Event from "./Event";
import Inventory from "./Inventory";

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
        <Route path="/blog" element={<PrivateRoute />}>
          <Route index element={<Blog />} />
        </Route>
        <Route path="/event" element={<PrivateRoute />}>
          <Route index element={<Event />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/inventory" element={<PrivateRoute />}>
          <Route index element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
