import React from "react";
import { useLocation, useRoutes } from "react-router-dom";

import HomeScreen from "../HomeScreen";
import Header from "../HomeScreen/Header";
// import SignUpMessage from "../Auth/Admin/SignUpMessage";
import Dashboard from "../DashBoard/ExpComp/Screen/Dashboard";
import ExpenseData from "../DashBoard/ExpComp/ExpenseComp/ExpenseData";
import ExpComp from "../DashBoard/ExpComp/ExpenseComp/ExpComp";
import Staffs from "../DashBoard/ExpComp/ExpenseComp/Staffs";
import Hub from "../DashBoard/ExpComp/ExpenseComp/Hub";
import CreateHub from "../DashBoard/ExpComp/ExpenseComp/CreateHub";

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
				{
					path: "staff",
					element: <Staffs />,
				},
				{
					path: "hub",

					children: [
						{
							index: true,
							element: <Hub />,
						},
					],
				},
			],
		},
	]);

	return element;
};

export default AllRoutes;
