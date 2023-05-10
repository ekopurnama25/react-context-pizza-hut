import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import { AuthProvider } from "./context/AuthContext";
import { MenuProvider } from "./context/MenuContext";
import { UsersCheckProvider } from "./context/UsersCheckContext";

function App() {
  // const [logged, setLogged] = useState(false);
  // const [user, setUser] = useState(undefined);
  return (
    <>
      <AuthProvider>
        <MenuProvider>
          <UsersCheckProvider>
            <Router>
              <Routes>
                <Route>
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Route>
              </Routes>
            </Router>
          </UsersCheckProvider>
        </MenuProvider>
      </AuthProvider>
    </>
  );
}

export default App;
