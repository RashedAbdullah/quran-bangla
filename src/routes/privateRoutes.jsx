/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Loading</p>;
  if (!user) return <Navigate to="/signin" />;

  return <>{children}</>;
};

export default PrivateRoutes;
