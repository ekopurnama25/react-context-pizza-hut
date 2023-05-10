import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, allowRoles }) => {
  let { user } = useContext(AuthContext);

  const userHasRequired =
    user && allowRoles.includes(user?.roles) ? true : false;
  console.log(userHasRequired);

  if (user && !userHasRequired) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
