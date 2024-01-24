import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import UsersPage from "../components/UsersPage";
import UsersDetail from "../components/UsersDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UsersDetail />} />
    </Routes>
  );
};

export default MainRoutes;
