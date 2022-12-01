import React from "react";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";

interface Iprops {
	ToggleStaff: () => void;
}

const AssignStaff: React.FC<Iprops> = ({ ToggleStaff }) => {
	return (
		<Container>
			<Card>
				<UpHold>
					<MainHold>
						<div
							style={{
								width: "100%",
							}}>
							<Cancel>
								<div></div>
								<ImCancelCircle onClick={ToggleStaff} />
							</Cancel>
							<h3> Idewu Center Hub </h3>

							<span>
								Note : You can assign a staff that has already been attached to
								a hub
							</span>

							<Hold>
								<input placeholder='enter name of your staff' />
								{/* <button>Search</button> */}
							</Hold>
							<br />
							<DropItem bg=''>
								<input type='radio' id='item1' value='Issace success' />
								<Label htmlFor='subscribeNews'>
									<DivCan>
										<ImaCan src='/assets/perfect.png' />
										<DivDe>
											Stella Amadi
											<pre style={{ color: "gray" }}>Staff </pre>
										</DivDe>
									</DivCan>
								</Label>
							</DropItem>
							<DropItem style={{ cursor: "not-allowed" }} bg='#f4f4f4'>
								<input
									disabled
									type='radio'
									id='item1'
									value='Issace success'
								/>
								<Label htmlFor='subscribeNews'>
									<DivCan>
										<ImaCan src='/assets/bay.png' />
										<DivDe>
											James Fortune
											<pre style={{ color: "gray" }}>Staff </pre>
										</DivDe>
									</DivCan>
								</Label>
							</DropItem>

							<button style={{ backgroundColor: "silver" }}>Assign</button>
							<br />
						</div>
					</MainHold>
				</UpHold>
			</Card>
		</Container>
	);
};

export default AssignStaff;

const ImaCan = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 4px;
	object-fit: cover;
	border: 1px solid #087cc5;
`;

const DivDe = styled.div`
	margin-left: 5px;
	margin-top: 5px;
	font-weight: bold;
`;

const Label = styled.label`
	margin-top: 3px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DivCan = styled.div`
	line-height: 5px;
	display: flex;
	margin-left: 5px;
`;
const DropItem = styled.div<{ bg: string }>`
	padding: 10px;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	background-color: ${(props) => props.bg};

	:hover {
		/* background-color: #f4f4f4; */
	}
	@media screen and (max-width: 800px) {
		padding-left: 0px;
	}
`;

const Hold = styled.div`
	input {
		width: 90%;
		height: 20px;
		padding: 10px;
		border: 1px solid lightgray;

		outline: 1px solid aliceblue;
		border-radius: 5px;
		margin-top: 10px;

		:focus {
			width: 90%;
			transition: all 350ms;
		}
	}
`;

const Cancel = styled.div`
	font-size: 20px;
	width: 500px;
	/* background-color: red; */
	align-items: flex-end;
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	@media screen and (max-width: 790px) {
		width: 300px;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: left;
	background: rgba(8, 124, 197, 0.4);
	height: 100vh;
	position: fixed;
	width: 200vw;
	z-index: 999;
	backdrop-filter: blur(5px);
	transition: all 350ms;

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
		margin-top: 10px;
		cursor: pointer;
		:hover {
			transform: scale(0.94);
		}
	}
`;

const MainHold = styled.div`
	margin-left: 10px;
	text-align: left;
	display: flex;
	flex-direction: column;

	p {
		width: 250px;
		@media screen and (max-width: 790px) {
			font-size: 14px;
			width: 100%;
		}
	}
`;
const UserImage = styled.img`
	height: 150px;
	width: 150px;
	background: silver;
	border-radius: 5px;
	object-fit: cover;
	@media screen and (max-width: 790px) {
		height: 70px;
		width: 70px;
	}
`;
const UpHold = styled.div`
	display: flex;
	flex-direction: column;
`;

const Card = styled.div`
	width: 500px;
	background: white;
	padding: 20px;
	border-radius: 10px;
	font-family: raleway;
	flex-direction: column;
	text-align: left;
	overflow-y: scroll;
	max-height: 400px;
	overflow-y: scroll;
	overflow-x: hidden;

	@media screen and (max-width: 790px) {
		width: 320px;
	}
`;
