import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate()
  const logout = async()=>{
    await signOut(auth);
    navigate("/");
  }
  return (
    <>
      <header className="container mx-auto z-10 sticky bg-white-s top-0 py-[15px] px-5 md:px-10 border-b-2 border-rasin-black text-sm md:text-base">
        <nav className="flex justify-between items-center">
          <h1 className="font-medium text-lg">
            <span className="text-folly">Blood</span>MED
          </h1>
          <div className="space-x-5 text-rasin-black text-[15px] flex items-center ">
            <Link className="hover:text-rasin-black hover:underline hover:underline-offset-[18px] hover:decoration-[1.5px]">
              Home
            </Link>
            <Link className="hover:text-rasin-black hover:underline hover:underline-offset-[18px] hover:decoration-[1.5px]">
              Appointment
            </Link>
            <Link className="hover:text-rasin-black hover:underline hover:underline-offset-[18px] hover:decoration-[1.5px]">
              Donations
            </Link>
            <Link to="/donor">Donor</Link>
            <Link>Inventory</Link>
            <Link>Blog</Link>
          </div>
          <div className="flex items-center space-x-2">
            <button className="border-2 bg-seasalt border-rasin-black py-1.5 px-2.5 flex items-center">
              <i className="ri-user-line text-rasin-black"></i>
            </button>
            <button className="border-2 bg-seasalt border-rasin-black py-1.5 px-2.5 flex items-center text-rasin-black hover:bg-rasin-black hover:text-seasalt" onClick={logout}>
              <i className="ri-logout-box-line"></i>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
