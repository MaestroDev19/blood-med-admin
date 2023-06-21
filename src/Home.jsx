import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import Nav from "./components/Nav";
import { getDoc, doc, query, where, collection, orderBy, onSnapshot, getCountFromServer } from "firebase/firestore";
import { db } from "./components/Firebase";
import { auth } from "./components/Firebase";
import React from "react";
export default function Home() {
  const [admin,setAdmin] = useState('')
  const [app,setApp] = useState([])
  const [latestEvent, setLatestEvent] = useState([]);
  const [donations, setDonations] = useState([]);
  const [countDonations,setCountDonations] = useState('');
  const [countDonor, setCountDonor] = useState('');
  const [countApp, setCountApp] = useState("");
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
    const getLatestEvent = () => {
      const q = query(collection(db, "events"), orderBy("date", "desc"));

      const unsub = onSnapshot(q, (querySnapshot) => {
        const events = querySnapshot.docs.map((doc) => doc.data());
        setLatestEvent(events.slice(0, 2));
      });
    };
    getLatestEvent();
    const getDonors = async () => {
      const q = query(collection(db, "donations"), orderBy("date","desc"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const donations = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDonations(donations);
      });
    };
    getDonors();
    const countDonations = async () => {
      try {
        const q = query(
          collection(db, "donations"));
        const snapshot = await getCountFromServer(q);
        setCountDonations(snapshot.data().count);
      } catch (err) {
        console.error(err);
      }
    };countDonations();
    const countDonors = async () => {
      try {
        const q = query(
          collection(db, "donors"));
        const snapshot = await getCountFromServer(q);
        setCountDonor(snapshot.data().count);
      } catch (err) {
        console.error(err);
      }
    };countDonors();
    const countAppointments = async () => {
      try {
        const q = query(
          collection(db, "appointments")
          
        );
        const snapshot = await getCountFromServer(q);
        setCountApp(snapshot.data().count);
        
      } catch (err) {
        console.error(err);
      }
    };countAppointments()
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

             <div className="border-2 border-rasin-black w-full p-5 flex justify-between items-center">
              <p className="font-medium">Total donors</p><p className="font-medium">{countDonor}</p>
             </div>
             <div className="border-2 border-rasin-black w-full p-5 flex justify-between items-center"><p className="font-medium">Total donations</p><p>{countDonations}</p></div>
             <div className="border-2 border-rasin-black w-full p-5 flex justify-between items-center"><p>Total appointments</p><p>{countApp}</p> </div>
           </div>
            <div className="space-y-5">
              <h1 className="font-medium">Latest donation</h1>
              <div className="overflow-x-auto  border-2 border-rasin-black mb-[40px]">
            <table className="min-w-full divide-y-2 divide-rasin-black text-sm ">
              <thead className="text-left">
                <tr className="">
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Donation ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Donor ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Blood component
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Donation date
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Quantity(ml)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y-2 divide-rasin-black">
                {donations.map((donation, index) => (
                  <tr key={`donor-${index}`}>
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900">
                      {donation.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {donation.donorID}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {donation.bloodcomponent}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {donation.date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {donation.quanity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                <Link to="/event"><p className="text-folly font-medium">View all</p></Link>
              </div>
              {latestEvent.map((event, index) => (
                <div key={`event-${index}`} className="flex justify-between items-center">
                  <p className="text-sm">{event.name}{' '}</p>
                  <p className="text-sm font-light">{event.date}{' '}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
