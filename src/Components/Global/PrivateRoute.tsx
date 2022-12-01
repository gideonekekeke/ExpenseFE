import React, { ReactNode } from "react";
import { redirect, Navigate, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Dashboard from "../DashBoard/ExpComp/Screen/Dashboard";
import HomeScreen from "../HomeScreen";
import Header from "../HomeScreen/Header";
import { user } from "./GlobalState";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const PrivateRoute = ({ children, ...props }: Props) => {
  const userData = useRecoilValue(user);

  return (
    <div>
      {userData !== null ? (
        <Dashboard />
      ) : (
        <div>
          <Header />
          <HomeScreen />
        </div>
      )}
    </div>
  );
};

export default PrivateRoute;
