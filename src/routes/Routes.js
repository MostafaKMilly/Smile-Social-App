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
} from "../pages/profile/views";
import GroupQuizes from "../pages/group/views/quizes/containers/GroupQuizes";
import Settings from "../pages/settings/containers/Settings";
import ManageUsers from "../pages/settings/views/manageUsers/containers/ManageUsers";
import AuthComponent from "../common/components/AuthComponent";
import DeleteUserAccount from "../pages/settings/views/deleteAccount/containers/DeleteUserAccount";

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
        ],
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "manage-users",
            element: (
              <AuthComponent show={["Admin_"]}>
                <ManageUsers />,
              </AuthComponent>
            ),
          },
          {
            path: "delete-account",
            element: <DeleteUserAccount />,
          },
        ],
      },
    ],
  },
  {
    path: "/groups/:groupName/",
    element: <Group />,
    children: [
      {
        path: "quizes",
        element: <GroupQuizes />,
      },
    ],
  },
];

function Routes() {
  return useRoutes(rotues);
}

export default Routes;
