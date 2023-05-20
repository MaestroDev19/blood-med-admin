import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./components/Firebase";
import { Link } from "react-router-dom";
export default function Appointments() {
  const [app, setApp] = useState([]);
  useEffect(() => {
    const getAppointment = async () => {
      const q = query(collection(db, "appointments"),orderBy("date", "desc"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const apps = querySnapshot.docs.map((doc) => doc.data());
        setApp(apps);
      });
      
    };
    getAppointment();
  }, []);
  return (
    <>
      <Nav />
      <main className="px-5 md:px-10 lg:px-[80px]">
        <h1 className="mt-[50px] text-4xl">Analytics</h1>
        <nav className="flex flex-col md:space-x-5 md:flex-row border-b-2 border-rasin-black md:border-transparent justify-center md:justify-start mt-[20px]   text-sm font-medium">
          <Link
            to="/donor"
            className="-mx-px font-medium py-4 md:border-b-2 md:border-current text-folly"
          >
            Donors
          </Link>

          <Link
            to=""
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly "
          >
            Donations
          </Link>

          <Link
            to="/appointment"
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly "
          >
            Appointments
          </Link>
        </nav>
        <div className="space-y-2.5 my-[40px]">
          <h1 className="text-xl">
            <span className="font-normal">Appointments</span>{" "}
          </h1>
          <p className="text-base lg:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quasi quas alias et voluptatum, veritatis porro perferendis,
          </p>
        </div>

        <div className="overflow-x-auto  border-2 border-rasin-black">
          <table className="min-w-full divide-y-2 divide-rasin-black text-sm ">
            <thead className="text-left">
              <tr className="">
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Donor id
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  First name
                </th>
                                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Last name
                </th>
                                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Date
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Time
                </th>
               
              </tr>
            </thead>

            <tbody className="divide-y-2 divide-rasin-black">
              {app.map((ap,index) => (
                <tr key={`ap-${index}`}>
                  <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900">
                    {ap.donorID}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {ap.firstname}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {ap.lastname}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {ap.date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {ap.time}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
