import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
         <Navbar name="BloodMED"/>
         <main className="mt-10 w-full bg-seasalt px-5 lg:px-10">
            <div className="flex flex-col space-y-1.5 w-full">
              <Link className="text-lg font-light font-poppins">Overview</Link>
              <h1 className="font-poppins text-3xl font-normal">Welcome back, <span className="font-medium">Charles</span> </h1>
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-12  space-x-2 mt-10 justify-center items ">
              <div className="lg:col-span-8  flex flex-col bg-salmon-pink">
                Do the Griddy broooooooooooooooo
              </div>
              <div className="lg:col-span-4 ">
                hi
              </div>
            </div>
         </main>
        </>
    )
}