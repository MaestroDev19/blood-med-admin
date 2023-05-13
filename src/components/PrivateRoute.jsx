import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { signOut } from "firebase/auth";

const PrivateRoute = () => {
  ;
  const [isAdmin,setIsAdmin] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        
        user.getIdTokenResult().then((idTokenResult) => {
        console.log(idTokenResult)
        if (idTokenResult.claims.admin) {
          setIsAdmin(user)
          console.log(user)
        } else {
          setIsAdmin(null)
          console.log(2)
        }})
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div><Loading /></div>;
  }

  return isAdmin ? <Outlet /> : <Navigate to= "/" />;
};

export default PrivateRoute;