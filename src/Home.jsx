import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import Nav from "./components/Nav";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./components/Firebase";
import { auth } from "./components/Firebase";
import React from "react";
export default function Home() {
  const [admin,setAdmin] = useState('')
  useEffect(() => {
    const admin =  async() => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      setAdmin(docSnap.data().firstname)
    };admin();
  }, []);
  return (
    <>
      <Nav/>
      <main className="px-5 md:px-10 lg:px-[80px] my-[60px]">
        <div className="space-y-4">
          <h1 className="text-4xl font-normal">Welcome{" "}<span className="font-medium">{admin}</span></h1>
          <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi quas alias et voluptatum, veritatis porro perferendis,</p>
        </div>
      </main>
    </>
  );
}
