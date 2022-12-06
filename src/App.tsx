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
			{userData ? <DashHeader /> : null}
			<MainRoute />
		</div>
	);
}

export default App;
