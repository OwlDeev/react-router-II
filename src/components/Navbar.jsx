import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../imgs/logo.png";

export default function ButtonAppBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <Box className="navbarMain">
      <AppBar position="static">
        <Toolbar>
          <div className="separationLogo">
            <NavLink className={setActiveClass} to="/react-router-II">
              <Typography variant="h4">HOME</Typography>
            </NavLink>
          </div>
          <div className="separationLogo">
            <img src={logo} alt="Logo" className="logoImg" />
          </div>
          <div className="separationLogo">
            <NavLink className={setActiveClass} to="/character">
              <Typography variant="h4">CHARACTER</Typography>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
