import React from "react";
import { useRoutes } from "react-router-dom";
import ForgotPassword from "../Auth/Admin/ForgotPassword";
import ResetPassword from "../Auth/Admin/ResetPassword";
import SignIn from "../Auth/Admin/SignIn";
import SignUp from "../Auth/Admin/SignUp";
import Start from "../Auth/Start";
import ConfirmCompany from "../Auth/Admin/confirmCompany";
import ConfirmCompanyMessage from "../Auth/Admin/ConfirmCompanyMessage";
import PasswordRequest from "../Auth/Admin/PasswordRequest";
import StaffSignUp from "../Auth/Staff/StaffSignUp";
import StaffSignIn from "../Auth/Staff/StaffSignIn";
import SecondConfirmation from "../Auth/Staff/SecondConfirmation";
import CompanyDesides from "../Auth/Staff/CompanyDesides";
import StaffForgotPasswords from "../Auth/Staff/StaffForgotPassword";
import StaffResetPassword from "../Auth/Staff/StaffResetPassword";

const AuthRoutes = () => {
	let element = useRoutes([
		{
			path: "/auth",
			element: <Start />,
		},

		{
			path: "/signupadmin",
			element: <SignUp />,
		},
		{
			path: "/confirmcompany",
			element: <ConfirmCompany />,
		},
		{
			path: "/signinadmin",
			element: <SignIn />,
		},
		{
			path: "/forgotpassword",
			element: <ForgotPassword />,
		},
		{
			path: "/api/company/:id/:token/reset",
			element: <ResetPassword />,
		},
		{
			path: "/requestresetpassword",
			element: <PasswordRequest />,
		},
		{
			path: "/api/company/:id/verify",
			element: <ConfirmCompanyMessage />,
		},

		{
			path: "/signinstaff",
			element: <StaffSignIn />,
		},

		{
			path: "/signupstaff",
			element: <StaffSignUp />,
		},
		{
			path: "/api/staff/:id/verify",
			element: <SecondConfirmation />,
		},
		{
			path: "/api/staff/:id/verifystaff",
			element: <CompanyDesides />,
		},

		{
			path: "/forgotpasswords",
			element: <StaffForgotPasswords />,
		},

		{
			path: "/api/staff/:id/:token/reset",
			element: <StaffResetPassword />,
		},
	]);

	return element;
};

export default AuthRoutes;

// :id/:token/reset
