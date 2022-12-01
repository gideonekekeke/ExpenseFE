import React from "react";
import { useRoutes } from "react-router-dom";

import HomeScreen from "../HomeScreen";
import Header from "../HomeScreen/Header";
import Dashboard from "../DashBoard/ExpComp/Screen/Dashboard";

import ExpComp from "../DashBoard/ExpComp/ExpenseComp/ExpComp";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <HomeScreen />
        </div>
      ),
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
      ],
    },
  ]);

  return element;
};

export default AllRoutes;
