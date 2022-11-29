import React from "react";
import { useRoutes } from "react-router-dom";

import HomeScreen from "../HomeScreen";
import Header from "../HomeScreen/Header";
// import SignUpMessage from "../Auth/Admin/SignUpMessage";
import Dashboard from "../DashBoard/ExpComp/Screen/Dashboard";
import ExpenseData from "../DashBoard/ExpComp/ExpenseComp/ExpenseData";
import ExpComp from "../DashBoard/ExpComp/ExpenseComp/ExpComp";
import DashHeader from "../DashBoard/ExpComp/Header/Header";

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
