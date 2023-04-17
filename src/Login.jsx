import {auth} from "../config/FirebaseConfig"
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import Button from "./components/Button"
import { useState } from "react"
export default function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const logIn = async()=>{
    try{await createUserWithEmailAndPassword(Login, email,password)}
    catch(err){console.error(err)}
   }
    return(
        <>
        <header className=" mx-auto max-w-screen  py-[25px] px-5 md:px-10 lg:px-[50px] ">
          <nav>
            <h1 className="font-medium  text-xl"><span class="text-munshell">Blood</span>MED</h1>
          </nav>
        </header>
        <main className=" mt-[60px] container mx-auto  px-5 md:px-10 lg:px-[50px] w-screen">
          <form className="md:flex md:justify-center md:items-center">
            <div className="flex flex-col space-y-10">
               <div className="space-y-2.5">
                  <h1 className="font-medium text-3xl md:4xl">Welcome back</h1>
                  <p className="font-light text-sm">Enter your login details to login</p>
               </div>
               <div className="space-y-5 md:w-[380px] w-full">
                <label htmlFor="UserEmail" className="relative block overflow-hidden border border-rasin-black px-3 pt-3 focus-within:border-munshell focus-within:ring-1 focus-within:ring-munshell">
                  <input type="email" id="UserEmail" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="peer h-8 w-full  border-none bg-transparent p-0 placeholder-transparent   focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"/>
                  <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">Your email</span>
                </label>
                <label htmlFor="UserPassword" className="relative block overflow-hidden border border-rasin-black px-3 pt-3 focus-within:border-munshell focus-within:ring-1 focus-within:ring-munshell">
                  <input type="password" id="UserPassword"placeholder="pass" onChange={(e)=>setPassword(e.target.value)} className="peer h-8 w-full  border-none bg-transparent p-0 placeholder-transparent   focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"/>
                  <span className="absolute left-3 top-3 -translate-y-1/2 text-sm text-rasin-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder- shown:text-sm peer-focus:top-3 peer-focus:text-xs">Password</span>
                </label>
               </div>
               <button className="p-3.5  bg-munshell text-seasalt text-center font-medium text-base" onClick={logIn} >Login</button>
            </div>
          </form>
        </main>
        </>
    )
}