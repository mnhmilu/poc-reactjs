import { Outlet, Link } from "react-router-dom";
import NavExample from "./bootstrap/NavExample";


import SimpleMenu from "./SimpleMenu";

const Layout = () => {
  return (
    <>
    <NavExample/>
      <Outlet />
    </>
  )
};

export default Layout;