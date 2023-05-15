import Nav from "./components/Nav";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <Nav />
      <main className="px-5 md:px-10">
        <div className=" space-y-2.5 my-[60px]">
          <h1 className="text-2xl md:text-3xl">
            <span className="font-normal">Profile</span>{" "}
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quasi quas alias et voluptatum, veritatis porro perferendis,
          </p>

        </div>
      </main>
    </>
  );
}
