import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./Firebase";

const PrivateRoute = () => {
  const [role, setRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        if (data) {
          setRole(data.role);
          setIsAdmin(data.role === "admin");
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkAdminStatus();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
