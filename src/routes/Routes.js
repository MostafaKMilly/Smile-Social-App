import React from "react";
import Layout from "../common/components/Layout";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/containers/Home";
import Login from "../pages/login/containers/Login";
import Signup from "../pages/signup/containers/Signup";
import MyMarks from "../pages/myMarks/containers/MyMarks";
import PostPage from './pages/Post/containers/postPage';

export const rotues = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home />  },
      { path: "/login", element: <Login /> ,index : true  },
      { path: "/generalGroup", element: <PostPage /> , index : true},
      { path: "/signup", element: <Signup /> , index : true},
      { path: "/myMarks", element: <MyMarks /> },
    ],
  },
];

function Routes() {
  return useRoutes(rotues);
}

export default Routes;
