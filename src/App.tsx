import { GlobalStyle } from "./Components/Global/GlobalStyle";
import AuthRoutes from "./Components/Routes/AuthRoute";
import MainRoute from "./Components/Routes/MainRoute";
import DashHeader from "./Components/DashBoard/ExpComp/Header/Header";
import { useRecoilValue } from "recoil";
import { user, userDecode } from "./Components/Global/GlobalState";

function App() {
	const userData = useRecoilValue(user);
	const users = useRecoilValue(userDecode);
	return (
		<div>
			<GlobalStyle />
			<AuthRoutes />
			{userData && users?.status ? <DashHeader /> : null}
			<MainRoute />
		</div>
	);
}

export default App;
