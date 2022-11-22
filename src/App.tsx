import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/HomeScreen/Header";
import AllRoutes from "./Components/Routes/AllRoutes";
import { GlobalStyle } from "./Components/Global/GlobalStyle";

function App() {
	return (
		<div>
			<Header />
			<GlobalStyle />
			<AllRoutes />
		</div>
	);
}

export default App;
