import { Outlet } from "react-router";
import AuthNav from "../../components/auth/AuthNav";

function RegisterLayout() {
  return (
    <>
      <AuthNav />
      <div className=" h-100 bg-black d-flex">
        <Outlet />
      </div>
    </>
  );
}

export default RegisterLayout;
