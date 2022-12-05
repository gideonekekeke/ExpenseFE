import React from "react";
import { useRoutes } from "react-router-dom";

import Dashboard from "../DashBoard/ExpComp/Screen/Dashboard";
import ExpComp from "../DashBoard/ExpComp/ExpenseComp/ExpComp";
import Staffs from "../DashBoard/ExpComp/ExpenseComp/Staffs";
import Hub from "../DashBoard/ExpComp/ExpenseComp/Hub";
import PrivateRoute from "../Global/PrivateRoute";
import StaffBoard from "../DashBoard/ExpComp/ExpenseComp/Staffs/StaffBoard";
import NewInvoice from "../DashBoard/ExpComp/ExpenseComp/Staffs/NewInvoice";
import HistoryHolder from "../DashBoard/ExpComp/ExpenseComp/Staffs/HistoryHolder";
import EditExpense from "../DashBoard/ExpComp/ExpenseComp/EditExpense";

const AllRoutes: React.FC = () => {
	let element = useRoutes([
		{
			path: "/",
			element: (
				<div>
					<PrivateRoute />
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
					path: "expense/viewdetails/:id",
					element: <EditExpense />,
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

		{
			path: "staff-board",
			children: [
				{
					index: true,
					element: <StaffBoard />,
				},
				{
					path: "revenue",
					element: <NewInvoice />,
				},
				{
					path: "history",
					element: <HistoryHolder />,
				},

				{
					path: "history/viewdetails/:id",
					element: <EditExpense />,
				},
			],
		},
	]);

	return element;
};

export default AllRoutes;
