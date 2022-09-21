import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Navbar from "../components/Navbar";
import RQSuperHeroes from "../components/RQSuperHeroes";
import SuperHeroes from "../components/SuperHeroes";

export default function Navigation() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
      </Routes>
    </div>
  );
}
