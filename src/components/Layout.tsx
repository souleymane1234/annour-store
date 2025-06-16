import { Outlet, useLocation } from "react-router-dom";
import DrawerAppBar from "./Drawerappbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; 

  return (
    <div className="app">
      <div className="main-content">
        {!isLoginPage && <DrawerAppBar />}
          <div className="content">
            <Outlet />
          </div>
        {!isLoginPage && <Footer />}
      </div>
    </div>
  );
};

export default Layout;