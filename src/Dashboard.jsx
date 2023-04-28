import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
        <head>
          <title>Overview</title>
        </head>
         <Navbar name="BloodMED"/>
         <main className="mt-10 w-full bg-seasalt px-5 lg:px-10 h-screen">
            <div className="flex flex-col space-y-1.5 w-full">
              <h1 className="text-base font-light ">Welcome<span className="font-medium"> Charles</span></h1>
              <Link className="text-3xl font-normal font-poppins">Overview</Link>
              <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-12  gap-5 mt-10 justify-center items ">
              <div className="lg:col-span-8  col-span-4 flex flex-col space-y-5 ">
                <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0  space-y-5 ">
                  <div className=" p-5 flex justify-between items-center w-full border-2 border-r-4 border-b-4 border-rasin-black h-[100px]">
                    <div>hi</div>
                    <div>hi</div>
                  </div>
                  <div className="border-2 border-r-4 border-b-4 border-rasin-black p-5 flex justify-between w-full items-center h-[100px]">
                    <div>hi</div>
                    <div>hi</div>
                  </div>
                  <div className="border-2 border-r-4 border-b-4 border-rasin-black p-5 flex justify-between w-full items-center h-[100px]">
                    <div>hi</div>
                    <div>hi</div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0  space-y-5 ">
                  <div className="border-2 border-r-4 border-b-4 border-rasin-black p-5 flex justify-between items-center w-full h-[100px]">
                    <div>hi</div>
                    <div>hi</div>
                  </div>
                 
                  <div className="border-2 border-r-4 border-b-4 border-rasin-black p-5 flex justify-between w-full items-center h-[100px]">
                    <div>hi</div>
                    <div>hi</div>
                  </div>
                </div>
              </div>
              <div className=" lg:col-span-4 col-span-4 ">
                <div className="flex flex-col">
                  <div className="border-2 border-r-4 border-b-4 border-rasin-black p-5 flex justify-between w-full items-center h-[220px]">
                    <div>hi</div>
                    <div>hi</div>
                  </div>
                </div>
              </div>
            </div>
         </main>
        </>
    )
}