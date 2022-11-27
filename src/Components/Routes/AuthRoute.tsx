import React from "react";
import { useRoutes } from "react-router-dom";
import ForgotPassword from "../Auth/Admin/ForgotPassword";
import ResetPassword from "../Auth/Admin/ResetPassword";
import SignIn from "../Auth/Admin/SignIn";
import SignUp from "../Auth/Admin/SignUp";
import SignUpMessage from "../Auth/Admin/SignUpMessage";
import Start from "../Auth/Start";
import ConfirmCompany from "../Auth/Admin/confirmCompany";

const AuthRoutes = () => {
  let element = useRoutes([
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

export default AuthRoutes;
