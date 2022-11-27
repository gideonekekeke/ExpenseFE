import React from "react";
import { useRoutes } from "react-router-dom";
import Auth from "../Auth/Auth";
import ForgotPassword from "../Auth/Admin/ForgotPassword";
import ResetPassword from "../Auth/Admin/ResetPassword";
import SignIn from "../Auth/Admin/SignIn";
import SignUp from "../Auth/Admin/SignUp";
import HomeScreen from "../HomeScreen";
import SignUpMessage from "../Auth/Admin/SignUpMessage";
import Start from "../Auth/Start";
import ConfirmCompany from "../Auth/Admin/confirmCompany";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },

    {
      path: "/auth",
      element: <Start />,
    },
    {
      path: "/signupadmin",
      element: <SignUp />,
    },
    {
      path: "/confirmcompany",
      element: <ConfirmCompany />,
    },
    {
      path: "/signinadmin",
      element: <SignIn />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/resetpassword",
      element: <ResetPassword />,
    },
    {
      path: "/signupmessage",
      element: <SignUpMessage />,
    },
  ]);

  return element;
};

export default AllRoutes;
