import * as React from "react";
import "./css/app.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Character from "./components/Character";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar className="navbarMain"></Navbar>
      <Routes>
        <Route path="/react-router-II" element={<Home />} />
        <Route path="/character/:name" element={<Character />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}
