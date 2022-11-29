import React from "react";
import { useRoutes } from "react-router-dom";
import Auth from "../Auth/Auth";
import ForgotPassword from "../Auth/Admin/ForgotPassword";
import ResetPassword from "../Auth/Admin/ResetPassword";
import SignIn from "../Auth/Admin/SignIn";
import SignUp from "../Auth/Admin/SignUp";
import HomeScreen from "../HomeScreen";
import SignUpMessage from "../Auth/Admin/SignUpMessage";
import Dashboard from "../DashBoard/ExpComp/Screen/Dashboard";
import ExpenseData from "../DashBoard/ExpComp/ExpenseComp/ExpenseData";
import ExpComp from "../DashBoard/ExpComp/ExpenseComp/ExpComp";
import Staffs from "../DashBoard/ExpComp/ExpenseComp/Staffs";
import Hub from "../DashBoard/ExpComp/ExpenseComp/Hub";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/signupadmin",
      element: <SignUp />,
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
    {
      path: "/admin-dashboard",

      children: [
        {
          index: true,
          element: <Dashboard />,
        },

        {
          path: "expense",
          element: <ExpComp />,
        },
        {
          path: "staff",
          element: <Staffs />,
        },
        {
          path: "hub",
          element: <Hub />,
        },
      ],
    },
  ]);

  return element;
};

export default AllRoutes;
