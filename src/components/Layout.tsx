import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DrawerAppBar from "./DrawerAppBar";
import Footer from "./Footer";
import { Box, Toolbar } from '@mui/material';

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