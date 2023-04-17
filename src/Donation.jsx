import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { useState } from "react";

export default function Donation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar name="BloodMED" />

      <main className="mt-10 w-full bg-seasalt px-5 lg:px-10 h-screen">
        <div className="flex flex-col space-y-1.5 w-full">
          <Link className="text-3xl font-normal font-poppins">Donations</Link>
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="p-3.5 bg-munshell text-seasalt text-center font-medium text-base"
          >
            Add donation
          </button>
          <Modal visible={showModal} onClose={() => setShowModal(false)} />
        </div>
      </main>
    </>
  );
}
