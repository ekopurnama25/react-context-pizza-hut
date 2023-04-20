import React, { useEffect } from "react";
import Dashboard from "../Dasboard";

const Layouts = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <Dashboard />
      <main>{children}</main>
    </>
  );
};

export default Layouts;
