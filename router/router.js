import React from "react";
import { Login, SignUp } from "../components";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { Routes, Route } from "react-router-dom";
import DashBoardPage from "../Pages/DashboardPage/DashBoardPage";
import HomePage from "../Pages/HomePage/HomePage";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          Home
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/signup" element={<SignUp />}>
          SignUp
        </Route>
        <Route path="/dashboard" element={<DashBoardPage />}>
          SignUp
        </Route>
        <Route path="*" element={<ErrorPage />}>
          SignUp
        </Route>
      </Routes>
    </>
  );
};

export default Router;
