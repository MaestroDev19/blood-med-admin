import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import Nav from "./components/Nav";
import { getDoc, doc, query, where, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./components/Firebase";
import { auth } from "./components/Firebase";
import React from "react";
export default function Home() {
  const [admin,setAdmin] = useState('')
  const [app,setApp] = useState([])
  const today = new Date().toISOString()
  console.log(today)
  useEffect(() => {
    const admin =  async() => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      setAdmin(docSnap.data().firstname)
    };admin();
    const getAppointment = async () => {
      const q = query(collection(db, "appointments"), orderBy("date", "desc"),where("date",">",today));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const apps = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setApp(apps);
      });
    };
    getAppointment();
  }, []);
  return (
    <>
      <Nav/>
      <main className="px-5 md:px-10 lg:px-[80px] my-[60px]">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal">Welcome{" "}<span className="font-medium">{admin}</span></h1>
          <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi quas alias et voluptatum, veritatis porro perferendis,</p>
        </div>
        <div className="grid grid-cols-12 gap-5 my-[60px]">
          <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col space-y-10">
           <div className="flex flex-col md:flex-row space-y-5 space-x-0 md:space-x-5 md:space-y-0 ">
             <div className="border-2 border-rasin-black  w-full">
      
             </div>
             <div className="border-2 border-rasin-black w-full">hi</div>
             <div className="border-2 border-rasin-black w-full">hi</div>
             <div className="border-2 border-rasin-black w-full">hi</div>
           </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col space-y-5">
            <div className="border-2 border-rasin-black w-full p-5 space-y-5">
              <div className="flex justify-between">
                <h3 className="text-base font-medium mb-7">Upcoming appointments</h3>
                <Link to="/appointment"><p className="text-folly font-medium">View all</p></Link>
              </div>
              {app.map((ap, index) => (
                <div key={`ap-${index}`} className="flex justify-between items-center">
                  <p className="text-sm">{ap.firstname}{' '}{ap.lastname}</p>
                  <p className="text-sm font-light">{ap.date}{' '}{ap.time}</p>
                </div>
              ))}
            </div>
            <div className="border-2 border-rasin-black space-y-5 p-5">
              <div className="flex justify-between">
                <h3 className="text-base font-medium mb-7">Upcoming events</h3>
                <Link to="/appointment"><p className="text-folly font-medium">View all</p></Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
