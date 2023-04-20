import HomePages from "../pages/Home";
import HomeUsersPages from "../pages/HomeUsers";
import LoginPages from "../pages/Login";
import NotFoundPages from "../pages/PageNotFount";
import PrivateRoute from "../utils/PrivateRoute";
import { Role } from "../utils/Roles";

const routes = [
  {
    path: "/users",
    element: (
      <PrivateRoute allowRoles={[Role.Admin]}>
        <HomeUsersPages />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/*",
    element: <NotFoundPages />,
  },
];

export default routes;
