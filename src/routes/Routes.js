import React from "react";
import Layout from "../common/components/Layout";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/containers/Home";
import Login from "../pages/login/containers/Login";
import Signup from "../pages/signup/containers/Signup";
import MyMarks from "../pages/myMarks/containers/MyMarks";

export const rotues = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/myMarks", element: <MyMarks /> },
    ],
  },
];

function Routes() {
  return useRoutes(rotues);
}

export default Routes;
