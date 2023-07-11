import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, allowRoles }) => {
  let { user } = useContext(AuthContext);
  //console.log(user);
  const userHasRequired =
    user && allowRoles.includes(user?.roles) ? true : false;
  // console.log(user);

  if (!user && !userHasRequired) return <Navigate to="/login" replace={true} />;
  // else if (!user && userHasRequired)
  //   return <Navigate to="/login" replace={true} />;
  return children;
};

export default PrivateRoute;
