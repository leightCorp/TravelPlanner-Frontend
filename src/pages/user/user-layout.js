import { Outlet } from "react-router";
import UserLogout from "../../components/user/user-logout";
import UserNav from "../../components/user/user-nav";

function UserLayout() {
  return (
    <>
      <div>
        <UserNav />
      </div>
      <Outlet />
    </>
  );
}

export default UserLayout;
