import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./components/Firebase";
import { Link } from "react-router-dom";
import AddModal from "./components/AddModal";
import UpdateModal from "./components/UpdateModal";
import { useFormik } from "formik";
export default function Inventory() {
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const getDonors = async () => {
      const q = query(collection(db, "inventory"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(items);
      });
    };
    getDonors();
  }, []);
  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    onSubmit: (values) => {
      const searchQuery = values.searchQuery.trim();

      if (searchQuery !== "") {
        const results = items.filter(
          (item) =>
            item.donorID
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            item.bloodcomponent
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) || item.bloodtype
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) 
          // Add more search criteria based on your table structure
        );
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    },
  });
  const dataToRender = searchResults.length > 0 ? searchResults : items;
  return (
    <>
      <Nav />
      <main className="px-5 md:px-10 lg:px-[80px]">
        <h1 className="mt-[50px] text-2xl md:text-3xl lg:text-4xl">
          Analytics
        </h1>
        <nav className="flex flex-col md:space-x-5 md:flex-row border-b-2 border-rasin-black md:border-transparent justify-center md:justify-start mt-[20px]   text-sm font-medium">
          <Link
            to="/donor"
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly"
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
          <Link
            to="/inventory"
            className="-mx-px font-medium py-4 md:border-b-2 md:border-current text-folly"
          >
            Inventory
          </Link>
        </nav>

        <div className="space-y-2.5 my-[40px]">
          <h1 className="text-xl">
            <span className="font-normal">Inventory</span>{" "}
          </h1>
          <div className="flex justify-between">
            <p className="text-base lg:text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quasi quas alias et voluptatum, veritatis porro
              perferendis,
            </p>
            
          </div>
        </div>
        <div className="space-y-2.5 mb-[40px]">
          <div className="grid grid-cols-12 gap-5">
            <form
              className="border-2 border-rasin-black py-2.5 px-4  space-x-2 flex-row items-center col-span-12 md:col-span-4 lg:col-span-8 flex"
              onSubmit={formik.handleSubmit}
            >
              <input
                type="text"
                id="searchQuery"
                name="searchQuery"
                value={formik.values.searchQuery}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Search..."
                className="px-2 py-1 bg-seasalt w-full border-transparent focus:border-transparent focus:outline-none"
              />
              {formik.touched.searchQuery && formik.errors.searchQuery && (
                <div className="text-red-500 text-sm">
                  {formik.errors.searchQuery}
                </div>
              )}
              <button
                type="submit"
                className="w-fit py-0 px-0 border-0 bg-seasalt hover:p-0 hover:bg-seasalt hover:border-0"
              >
                <i className="ri-search-line"></i>
              </button>
            </form>
            <div className="col-span-6 md:col-span-4 lg:col-span-2 flex  w-full"><AddModal /></div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2 flex  w-full"><UpdateModal /></div>
          </div>
          <div className="overflow-x-auto  border-2 border-rasin-black mb-[40px]">
            <table className="min-w-full divide-y-2 divide-rasin-black text-sm ">
              <thead className="text-left">
                <tr className="">
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Inventory ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Donation ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Blood component
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Blood type
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Expiration date
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                    Availability
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y-2 divide-rasin-black">
                {dataToRender.map((item, index) => (
                  <tr key={`item-${index}`}>
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900">
                      {item.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {item.donationID}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {item.bloodcomponent}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {item.bloodtype}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {item.expdate}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                      {item.availability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
