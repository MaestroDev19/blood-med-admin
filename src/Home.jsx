import { Link } from "react-router-dom";
import Nav from "./components/Nav";
export default function Home() {
  return (
    <>
      <Nav/>
      <main className="px-10 my-[50px]">
        <div className="space-y-4">
          <p className="text-lg font-light">Welcome<span className="font-normal"> Admin</span></p>
          <h1 className="text-4xl font-light">Home </h1>
          <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi quas alias et voluptatum, veritatis porro perferendis,</p>
        </div>
      </main>
    </>
  );
}
