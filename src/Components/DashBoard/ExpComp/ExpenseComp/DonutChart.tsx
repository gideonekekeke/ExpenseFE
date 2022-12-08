import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useRecoilValue } from "recoil";
import { userDecode } from "../../../Global/GlobalState";

ChartJS.register(ArcElement, Tooltip, Legend);

const url = "https://event-3p90.onrender.com";

interface iData {
	_id: string;
	submittedBy: string;
	image: string;
	totalExpense: number;
	totalSales: number;
	hubName: string;
	date: string;
	profit: number;
	note: string;
}
interface iData2 {
	_id: string;
}

const DonutChart = () => {
	const user = useRecoilValue(userDecode);
	const [sales, setSales] = useState([] as iData[]);
	const [prof, setProf] = useState<number>(0);
	const [sal, setSal] = useState<number>(0);
	const [exp, setExp] = useState<number>(0);

	const getAll = async () => {
		const newURL = `${url}/api/sales/${user._id}/record`;
		await axios.patch(newURL).then((res) => {
			setSales(res.data.data.salesRecord);
		});
	};

	const getProfits = () => {
		setProf(
			sales
				.map((el) => {
					return el.profit;
				})
				.reduce((a: number, b: number) => {
					return a + b;
				}, 0),
		);
	};
	const getExpense = () => {
		setExp(
			sales
				.map((el) => {
					return el.totalExpense;
				})
				.reduce((a: number, b: number) => {
					return a + b;
				}, 0),
		);
	};
	const getSales = () => {
		setSal(
			sales
				.map((el) => {
					return el.totalSales;
				})
				.reduce((a: number, b: number) => {
					return a + b;
				}, 0),
		);
	};

	useEffect(() => {
		getAll();
		getProfits();
		getExpense();
		getSales();
	}, [sal, prof, exp, sales]);

	const data = {
		labels: ["Sales", "Expenses", "Profit"],
		datasets: [
			{
				label: "total",
				data: [prof, sal, exp],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			{data?.datasets[0]?.data?.length >= 1 ? (
				<Doughnut data={data} />
			) : (
				<div>No data to load yet </div>
			)}
		</div>
	);
};

export default DonutChart;
