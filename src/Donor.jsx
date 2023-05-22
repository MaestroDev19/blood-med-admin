import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./components/Firebase";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
export default function Donor() {
  const [donors, setDonors] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const getDonors = async () => {
      const q = query(collection(db, "donors"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const donor = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setDonors(donor);
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
        const results = donors.filter(
          (donor) =>
            donor.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            donor.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            donor.bloodGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
            donor.gender.toLowerCase().includes(searchQuery.toLowerCase())
          // Add more search criteria based on your table structure
        );
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    },
  });
  const dataToRender = searchResults.length > 0 ? searchResults : donors;
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
          <Link
            to="/inventory"
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly "
          >
            Inventory
          </Link>
        </nav>
        <div className="space-y-2.5 my-[40px]">
          <h1 className="text-xl">
            <span className="font-normal">Donors</span>{" "}
          </h1>
          <p className="text-base lg:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quasi quas alias et voluptatum, veritatis porro perferendis,
          </p>
        </div>
          <div className="space-y-2.5 mb-[40px]">
        <div className="">
          <form
            className="border-2 border-rasin-black py-2.5 px-4  space-x-2 flex-row items-center  flex"
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
          
        </div>
        <div className="overflow-x-auto  border-2 border-rasin-black">
          <table className="min-w-full divide-y-2 divide-rasin-black text-sm ">
            <thead className="text-left">
              <tr className="">
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Donor ID
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  First name
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-rasin-black">
                  Last name
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
              {dataToRender.map((donor, index) => (
                <tr key={`donor-${index}`}>
                  <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900">
                    {donor.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {donor.firstname}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-rasin-black">
                    {donor.lastname}
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
        </div>
      </main>
    </>
  );
}
