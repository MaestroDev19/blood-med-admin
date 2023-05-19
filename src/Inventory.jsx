import Nav from "./components/Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./components/Firebase";
import TestModal from "./components/TestModal";
export default function Inventory() {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const getIventory = () => {
      const q = query(collection(db, "inventory"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const box = querySnapshot.docs.map((doc) => doc.data());
        setInventory(box);
      });
    };
    getIventory();
  }, []);
  console.log(inventory);
  return (
    <>
      <Nav />
      <main className="px-5 md:px-10 lg:px-[80px]">
        <h1 className="mt-[50px] text-2xl md:text-3xl lg:text-4xl ">
          Analytics
        </h1>
        <nav className="flex flex-col md:space-x-5 md:flex-row border-b-2 border-rasin-black md:border-transparent justify-center md:justify-start mt-[20px]   text-sm font-medium">
          <Link
            to="/donor"
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly "
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
            to=""
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly "
          >
            Appointments
          </Link>

          <Link
            to="/inventory"
            className="-mx-px font-medium py-4 md:border-b-2 md:border-current text-folly "
          >
            Inventory
          </Link>
        </nav>
        <div className="space-y-2.5 my-[40px] flex justify-between">
          <div>
            <h1 className="text-xl">
              <span className="font-normal">Inventory</span>{" "}
            </h1>
            <p className="text-base lg:text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quasi quas alias et voluptatum, veritatis porro
              perferendis,
            </p>
          </div>
          <TestModal/>
        </div>
        <div className="overflow-x-auto  border-2 border-rasin-black">
          <table className="min-w-full divide-y-2 divide-rasin-black text-sm ">
            <thead className="text-left">
              <tr className="">
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Donor id
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
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Expiration date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y-2 divide-rasin-black">
              {inventory.map((box) => (
                <tr key={box.id}>
                  <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900">
                    {box.donorid}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {box.bloodcomponent}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {box.bloodgroup}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {box.quantity}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {box.expdate}
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
