import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/HomeScreen/Header";
import AllRoutes from "./Components/Routes/AllRoutes";
import { GlobalStyle } from "./Components/Global/GlobalStyle";
import AuthRoutes from "./Components/Routes/AuthRoute";
import MainRoute from "./Components/Routes/MainRoute";
import DashHeader from "./Components/DashBoard/ExpComp/Header/Header";
import { useRecoilValue } from "recoil";
import { user } from "./Components/Global/GlobalState";

function App() {
	const userData = useRecoilValue(user);
	return (
		<div>
			<GlobalStyle />
			<AuthRoutes />
			<DashHeader />
			<MainRoute />
		</div>
	);
}

export default App;
