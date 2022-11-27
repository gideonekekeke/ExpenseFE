import React from "react";
import { useRoutes } from "react-router-dom";

import HomeScreen from "../HomeScreen";
import Header from "../HomeScreen/Header";

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
  ]);

  return element;
};

export default AllRoutes;
