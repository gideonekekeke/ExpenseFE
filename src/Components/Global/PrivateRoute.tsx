import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import StaffBoard from "../DashBoard/ExpComp/ExpenseComp/Staffs/StaffBoard";
import Dashboard from "../DashBoard/ExpComp/Screen/Dashboard";
import HomeScreen from "../HomeScreen";
import Header from "../HomeScreen/Header";
import { user, userDecode } from "./GlobalState";

interface Props {
	children?: ReactNode;
	// any props that come into the component
}
const PrivateRoute = ({ children, ...props }: Props) => {
	const userData = useRecoilValue(user);
	const users = useRecoilValue(userDecode);

	return (
		<div>
			{userData !== null && users?.status === "admin" ? (
				<Dashboard />
			) : (
				<>
					{userData !== null && users?.status === "staff" ? (
						<StaffBoard />
					) : (
						<div>
							<Header />
							<HomeScreen />
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default PrivateRoute;
