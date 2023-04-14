import Navlink from "./Navlink"
import { Link } from "react-router-dom"
export default function Navbar(props){
    return(
        <>
        <header className="w-full bg-seasalt py-6  px-5 lg:px-10 border-b ">
          <nav className="  flex justify-between items-center">
            <div className="space-x-10 flex justify-center items-center">
              <Link to={props.to} className=" text-rasin-black text-xl lg:text-2xl  font-poppins"><span className="text-munshell">Blood</span>MED</Link>
              <div className="space-x-5 text-base  font-light hidden lg:flex">
                <Navlink to="/home" name="Overview" className=" active:underline active:underline-offset-8 active:decoration-munshell"/>
                <Navlink to="/home" name="Donors" className=" hover:underline hover:underline-offset-8 hover:decoration-munshell"/>
                <Navlink to="/home" name="Donations" className=" hover:underline hover:underline-offset-8 hover:decoration-munshell"/>
                <Navlink to="/home" name="Appointments" className=" hover:underline hover:underline-offset-8 hover:decoration-munshell"/>
                <Navlink to="/home" name="Blood inventory" className=" hover:underline hover:underline-offset-8 hover:decoration-munshell"/>
              </div>
            </div>
            <div className="space-x-5 text-base font-light  hidden lg:flex">
                <i class="ri-settings-4-line text-xl font-light text-rasin-black"></i>
                <i class="ri-user-line text-xl font-light text-rasin-black"></i>
            </div>  
          </nav>
        </header>
        </>
    )
}