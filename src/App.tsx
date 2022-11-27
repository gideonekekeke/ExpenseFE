import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/HomeScreen/Header";
import AllRoutes from "./Components/Routes/AllRoutes";
import { GlobalStyle } from "./Components/Global/GlobalStyle";
import AuthRoutes from "./Components/Routes/AuthRoute";
import MainRoute from "./Components/Routes/MainRoute";

function App() {
  return (
    <div>
      <GlobalStyle />
      <AuthRoutes />

      <MainRoute />
    </div>
  );
}

export default App;
