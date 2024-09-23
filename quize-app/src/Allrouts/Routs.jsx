import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Quiz } from "../pages/Quiz";
import Resuld from "../pages/Resuld";
import { Navbar } from "../components/Navbar";

const Routs = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resuld" element={<Resuld />} />
      </Routes>
    </div>
  );
};

export default Routs;
