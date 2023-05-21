import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./components/Firebase";
import { Link } from "react-router-dom";
import TestModal from "./components/TestModal";
export default function Donations() {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    const getDonors = async () => {
      const q = query(collection(db, "donors"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const donor = querySnapshot.docs.map((doc) => doc.data());
        setDonors(donor);
      });
      
    };
    getDonors();
  }, []);
  return (
    <>
      <Nav />
      <main className="px-5 md:px-10 lg:px-[80px]">
        <h1 className="mt-[50px] text-2xl md:text-3xl lg:text-4xl">Analytics</h1>
        <nav className="flex flex-col md:space-x-5 md:flex-row border-b-2 border-rasin-black md:border-transparent justify-center md:justify-start mt-[20px]   text-sm font-medium">
          <Link
            to="/donor"
            className="-mx-px font-medium py-4 md:border-b-2 md:border-current text-folly"
          >
            Donors
          </Link>

          <Link
            to="/donation"
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
            <span className="font-normal">Donations</span>{" "}
          </h1>
          <div className="flex justify-between">
                       <p className="text-base lg:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quasi quas alias et voluptatum, veritatis porro perferendis,
          </p>
                  <TestModal/>
          </div>
        </div>

        <div className="overflow-x-auto  border-2 border-rasin-black mb-[40px]">
          <table className="min-w-full divide-y-2 divide-rasin-black text-sm ">
            <thead className="text-left">
              <tr className="">
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  First
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Last name
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Blood component
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Blood group
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Quantity
                </th>
              </tr>
            </thead>

            <tbody className="divide-y-2 divide-rasin-black">
              {donors.map((donor, index) => (
                <tr key={`donor-${index}`}>
                  <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900">
                    {donor.firstname}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {donor.lastname}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {donor.age}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {donor.gender}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {donor.bloodGroup}
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
