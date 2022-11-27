import React from "react";
import { useRoutes } from "react-router-dom";
import ForgotPassword from "../Auth/Admin/ForgotPassword";
import ResetPassword from "../Auth/Admin/ResetPassword";
import SignIn from "../Auth/Admin/SignIn";
import SignUp from "../Auth/Admin/SignUp";
import SignUpMessage from "../Auth/Admin/ConfirmCompanyMessage";
import Start from "../Auth/Start";
import ConfirmCompany from "../Auth/Admin/confirmCompany";
import ConfirmCompanyMessage from "../Auth/Admin/ConfirmCompanyMessage";

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
      path: "/api/company/:id/verify",
      element: <ConfirmCompanyMessage />,
    },
  ]);

  return element;
};

export default AuthRoutes;

// confirm - company - message;
