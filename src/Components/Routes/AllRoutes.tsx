import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../HomeScreen";

const AllRoutes = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <HomeScreen />,
		},
	]);

	return element;
};

export default AllRoutes;
