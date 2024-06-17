import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPages, MarvelPage, SearchPage, HeroesPage } from "..";
import { Navbar } from "../../ui";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="/" element={<Navigate to="marvel" />} />
          <Route path="hero/:heroId" element={<HeroesPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
