import Nav from "./components/Nav";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <Nav />
      <main className="px-5 md:px-10">
        <div className=" space-y-2.5 my-[50px]">
          <h1 className="text-2xl md:text-3xl">
            <span className="font-normal">Profile</span>{" "}
          </h1>
          <p className="text-sm md:text-base  font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Blanditiis
            quasi quas alias et voluptatum, veritatis porro perferendis,
          </p>
        </div>
        <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-x-4 space-y-5 lg:space-y-0">
            <div className="col-span-6">
              <div className="border-2 border-rasin-black p-5">
                <h1>Hi</h1>
              </div>
            </div>
            <div className="col-span-6">
            <div className="p-5">
              <h1>Hi</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
