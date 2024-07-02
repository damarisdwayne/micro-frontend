import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultRoutes } from "./routes";
import Home from '../pages/home'
import Details from '../pages/details'

const Navigation = () => {
  return (
      <Routes>
        <Route path={DefaultRoutes.HOME} element={<Home />} />
        <Route path={DefaultRoutes.DETAILS} element={<Details />} />
      </Routes>
  );
};

export default Navigation;
