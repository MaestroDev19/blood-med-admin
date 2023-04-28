import Navlink from "./Navlink"
import { Link } from "react-router-dom"
export default function Navbar(props){
  return(
    <>
    <header className="w-full bg-seasalt py-6 px-5 lg:px-10 border-b-2 border-rasin-black">
      <nav className="flex justify-between items-center">
      <div className="flex justify-center items-center space-x-10">
        <Link to={props.to} className="text-xl lg:text-2xl  text-rasin-black">
          <span className="text-munshell">Blood</span>MED
        </Link>
        <div className="hidden lg:flex space-x-5 font-light text-base">
          <Navlink to="/overview" name="Home" className="active:text-munshell" />
          <Navlink to="/donor" name="Donors" className="hover:underline hover:underline-offset-8 hover:decoration-munshell" />
          <Navlink to="/donation" name="Donations" className="hover:underline hover:underline-offset-8 hover:decoration-munshell" />
          <Navlink to="/appointment" name="Appointments" className="hover:underline hover:underline-offset-8 hover:decoration-munshell" />
          <Navlink to="/inventory" name="Blood inventory" className="hover:underline hover:underline-offset-8 hover:decoration-munshell" />
        </div>
      </div>
      <div className="hidden lg:flex space-x-5 font-light text-base">
        <i class="text-xl font-light text-rasin-black ri-settings-4-line"></i>
        <i class="text-xl font-light text-rasin-black ri-user-line"></i>
      </div>
      </nav>
    </header>
  </>
  )
}