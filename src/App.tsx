import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/HomeScreen/Header";
import AllRoutes from "./Components/Routes/AllRoutes";
import { GlobalStyle } from "./Components/Global/GlobalStyle";
import SlideComp from "./Components/DashBoard/ExpComp/Header/SlideComp";
import DashHeader from "./Components/DashBoard/ExpComp/Header/Header";

function App() {
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <GlobalStyle />
      {show ? (
        <>
          <DashHeader />
        </>
      ) : (
        <Header />
      )}

      <AllRoutes />
    </div>
  );
}

export default App;
