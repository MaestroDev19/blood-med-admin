import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const menu = ()=>{
    document.getElementById('mobile').classList.toggle('hidden')
  }
  const navigate = useNavigate();
  const profile  =()=>{
    navigate("/profile");
  }
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <>
      <header className="z-10 sticky bg-white-s top-0 py-[15px] px-5 md:px-10 lg:px-[80px] border-b-2 border-rasin-black text-sm md:text-base bg-seasalt w-full">
        <nav className="flex justify-between items-center">
          <h1 className="font-medium text-lg">
            <span className="text-folly">Blood</span>MED
          </h1>
          <div className="space-x-5 text-rasin-black text-[15px] hidden lg:flex items-center tracking-">
            <Link to='/home' className="hover:text-rasin-black hover:underline hover:underline-offset-[18px] hover:decoration-[1.5px]">
              Home
            </Link> 
            <Link to="/donor">Analytics</Link>
            <Link to="/blog">Post</Link>
            
          </div>
          <div className="hidden items-center space-x-2 lg:flex">
            <button className="border-2 bg-seasalt border-rasin-black py-1.5 px-2.5 flex items-center" onClick={profile}>
              <i className="ri-user-line text-rasin-black"></i>
            </button>
            <button
              className="border-2 bg-seasalt border-rasin-black py-1.5 px-2.5 flex items-center text-rasin-black hover:bg-rasin-black hover:text-seasalt"
              onClick={logout}
            >
              <i className="ri-logout-box-line"></i>
            </button>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="border-2 bg-seasalt border-rasin-black py-1.5 px-2.5 flex items-center text-rasin-black hover:bg-rasin-black hover:text-seasalt"
              onClick={menu}
            >
              <i className="ri-menu-3-line" id="menu"></i>
            </button>
          </div>
        </nav>
        <nav className=" hidden" id="mobile">
          <div className="flex lg:hidden flex-col space-y-5 mt-5">
            <Link>
              Home
            </Link>
            <Link to="/donor">Analytics</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/blog'>Profile</Link>
            <Link to='/blog'>Blog</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
