import HomePages from "../pages/Home";
import HomeUsersPages from "../pages/HomeUsers";
import LoginPages from "../pages/Login";
import MenuUsersPages from "../pages/Menu";
import AddMenuUsersPages from "../pages/Menu/AddMenu";
import NotFoundPages from "../pages/PageNotFount";
import CheckUSersRouter from "../utils/CheckUSersRouter";
import PrivateRoute from "../utils/PrivateRoute";
import { Role } from "../utils/Roles";
const routes = [
  {
    path: "/users",
    element: (
      <PrivateRoute allowRoles={[Role.Admin]}>
        <CheckUSersRouter>
          <HomeUsersPages />
        </CheckUSersRouter>
      </PrivateRoute>
    ),
  },
  {
    path: "/menu",
    element: (
      <PrivateRoute allowRoles={[Role.Admin]}>
        <CheckUSersRouter>
          <MenuUsersPages />
        </CheckUSersRouter>
      </PrivateRoute>
    ),
  },
  {
    path: "/addmenu",
    element: (
      <PrivateRoute allowRoles={[Role.Admin]}>
        <CheckUSersRouter>
          <AddMenuUsersPages />
        </CheckUSersRouter>
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
