import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import {db} from './components/Firebase'
export default function Donor() {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    const getDonors =  async() => {
      const q =await getDocs(query(collection(db, "donors")));
        const donor = q.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()
        }));
        setDonors(donor)
    };getDonors();
  }, []);
  return (
    <>
      <Nav />
      <main className="px-5 md:px-10">
        <div className="space-y-2.5 my-[80px]">
          <h1 className="text-4xl">
            <span className="font-normal">Donors</span>{" "}
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
                  First name
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Last name
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Date of birth
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Gender
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Blood group
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Phone number
                </th>
              </tr>
            </thead>

            <tbody className="divide-y-2 divide-rasin-black">
              {donors.map((donor)=>(
              <tr key={donor.id}>
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
                <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                  {donor.phonenumber}
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
