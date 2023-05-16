import Nav from "./components/Nav"
export default function Inventory(){
    return(
        <>
                <Nav />
      <main className="px-5 md:px-10 lg:px-[80px]">
        <h1 className="mt-[50px] text-4xl">Analytics</h1>
        <nav className="flex flex-col md:space-x-5 md:flex-row border-b-2 border-rasin-black md:border-transparent justify-center md:justify-start mt-[20px]   text-sm font-medium">
          <a
            href=""
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly "
          >
            Donors
          </a>

          <a
            href=""
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly "
          >
            Donations
          </a>

          <a
            href=""
            className="-mb-px hover:border-b-2 hover:border-transparent py-4 hover:text-folly "
          >
            Appointments
          </a>

          <a
            href=""
            className="-mx-px font-medium py-4 md:border-b-2 md:border-current text-folly "
          >
            Inventory
          </a>
        </nav>
        <div className="space-y-2.5 my-[40px]">
          <h1 className="text-xl">
            <span className="font-normal">Inventory</span>{" "}
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
              {donors.map((donor) => (
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
    )
}