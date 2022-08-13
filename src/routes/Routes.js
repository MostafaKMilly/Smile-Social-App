import React from "react";
import { BaseLayout } from "../layouts";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/containers/Home";
import MyMarks from "../pages/myMarks/containers/MyMarks";
import Access from "../pages/access/containers/Access";
import Login from "../pages/access/views/login/containers/Login";
import Signup from "../pages/access/views/signup/containers/Signup";
import Groups from "../pages/groups/containers/Groups";
import Lectures from "../pages/lectures/containers/Lectures";
import Profile from "../pages/profile/containers/Profile";
import Group from "../pages/group/containers/Group";
import {
  PersonPersonalInfo,
  PersonChangePassword,
  EditUniversityNumbers,
} from "../pages/profile/views";

export const rotues = [
  {
    element: <Access />,
    path: "/access",
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "groups", element: <Groups /> },
      { path: "myMarks", element: <MyMarks /> },
      { path: "lectures", element: <Lectures /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <PersonPersonalInfo />,
          },
          {
            path: "changePassword",
            element: <PersonChangePassword />,
          },
          {
            path: "edit-university-numbers",
            element: <EditUniversityNumbers />,
          },
        ],
      },
    ],
  },
  {
    path: "/groups/:groupName/",
    element: <Group />,
  },
];

function Routes() {
  return useRoutes(rotues);
}

export default Routes;
