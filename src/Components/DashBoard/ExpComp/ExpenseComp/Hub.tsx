import React from "react";
import styled from "styled-components";
import AssignStaff from "./AssignStaff";
import CreateHub from "./CreateHub";

const Hub = () => {
	const [toggleCreate, setToggleCreate] = React.useState(false);
	const [toggleStaff, setToggleStaff] = React.useState(false);

	const ToggleCreate = () => {
		setToggleCreate(!toggleCreate);
	};
	const ToggleStaff = () => {
		setToggleStaff(!toggleStaff);
	};

	return (
		<Container>
			<Wrapper>
				<HubsTitle>
					<h4>All Hubs</h4>
					<button onClick={ToggleCreate}>New Hub</button>
				</HubsTitle>
				<HubsCardCtrl>
					<HubsCard>
						<HubName>Idewu Center</HubName>
						<HubStaff>
							{" "}
							<strong>Staff:</strong> Olorunda Samuel
						</HubStaff>
						<br />
						<br />
						<button onClick={ToggleStaff}>View details</button>
					</HubsCard>
					<HubsCard>
						<HubName>Idewu Center</HubName>
						<HubStaff>
							{" "}
							<strong>Staff:</strong> Olorunda Samuel
						</HubStaff>
						<br />
						<br />
						<button>View details</button>
					</HubsCard>
					<HubsCard>
						<HubName>Idewu Center</HubName>
						<HubStaff>
							{" "}
							<strong>Staff:</strong> Olorunda Samuel
						</HubStaff>
						<br />
						<br />
						<button>View details</button>
					</HubsCard>
					<HubsCard>
						<HubName>Idewu Center</HubName>
						<HubStaff>
							{" "}
							<strong>Staff:</strong> Olorunda Samuel
						</HubStaff>
						<br />
						<br />
						<button>View details</button>
					</HubsCard>
					<HubsCard>
						<HubName>Idewu Center</HubName>
						<HubStaff>
							{" "}
							<strong>Staff:</strong> Olorunda Samuel
						</HubStaff>
						<br />
						<br />
						<button>View details</button>
					</HubsCard>
				</HubsCardCtrl>
			</Wrapper>

			{toggleCreate ? <CreateHub ToggleCreate={ToggleCreate} /> : null}
			{toggleStaff ? <AssignStaff ToggleStaff={ToggleStaff} /> : null}
		</Container>
	);
};

export default Hub;
const Container = styled.div`
	/* width: 100%; */
	width: calc(100vw - 190px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	/* align-items: flex-end; */
	background-color: #f8f9fa;
	/* background-color: gold; */
	overflow: hidden;
	position: absolute;
	right: 0px;
	top: 50px;

	@media screen and (max-width: 1100px) {
		width: 95%;
	}
	@media screen and (max-width: 1005px) {
		width: 100%;
	}

	/* background-color: #352b1e; */
`;

const Wrapper = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	@media (max-width: 500px) {
		width: 90%;
	}
`;

const HubsTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		height: 30px;
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: poppins;
		background-color: #087cc5;
		border: none;
		outline: none;
		color: #fff;
		font-weight: 600;
		border-radius: 4px;
		transition: all 350ms;
		cursor: pointer;
		:hover {
			transform: scale(0.94);
		}
	}
`;

const HubsCardCtrl = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const HubsCard = styled.div`
	height: 200px;
	width: 220px;
	background-color: aliceblue;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

	button {
		height: 30px;
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: poppins;
		background-color: #087cc5;
		border: none;
		outline: none;
		color: #fff;
		font-weight: 600;
		border-radius: 4px;
		transition: all 350ms;
		cursor: pointer;
		:hover {
			transform: scale(0.94);
		}
	}
`;
const HubName = styled.div`
	font-weight: 800;
	font-size: 24px;
	margin-bottom: 10px;
`;
const HubStaff = styled.div``;
