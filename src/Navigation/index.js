import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Navbar from "../components/Navbar";
import RQSuperHeroes from "../components/RQSuperHeroes";
import SuperHeroes from "../components/SuperHeroes";
import RQSuperHero from "../components/RQSuperhero";

export default function Navigation({ data, superHeroes, isError, error }) {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/super-heroes"
          element={<SuperHeroes superHeroes={superHeroes} />}
        />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />

        <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
      </Routes>
    </div>
  );
}
