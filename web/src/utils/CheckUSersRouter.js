import { useEffect, useState } from "react";
import { CheckUsers } from "../service/auth";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const CheckUSersRouter = ({ children }) => {
  let { user } = useContext(AuthContext);
  const [checkUsers, setCheckUsers] = useState();

  useEffect(() => {
    const CHECK = () => {
      const UserCheck = CheckUsers();
      setCheckUsers(UserCheck);
    };

    //setCheckUsers(CHECK);
    CHECK();
  }, []);

  return children;
};

export default CheckUSersRouter;
