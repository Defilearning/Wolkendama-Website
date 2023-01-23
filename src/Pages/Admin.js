import { Outlet } from "react-router-dom";
import Customer from "../Admin/Navigation/Customer";
import Shop from "../Admin/Navigation/Shop";

const Admin = () => {
  return (
    <div className="min-h-screen min-w-full flex relative">
      <div className="h-full w-full bg-slate-800 fixed -z-10" />
      <div className="min-w-fit w-2/12 h-screen bg-slate-600 fixed">
        <Shop />
        <Customer />
      </div>
      <div className="left-[16.6667%] w-10/12 h-screen absolute">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
