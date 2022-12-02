import { FaSchool } from "react-icons/fa";
import { IoQrCode } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import styled from "styled-components";

const StaffBoard = () => {
	return (
		<Container>
			<Wrapper>
				<RowOne>
					<Boxes>
						<BoxOneIconHold
							style={{
								backgroundColor: "#FF0000",
							}}>
							{" "}
							<FaSchool />{" "}
						</BoxOneIconHold>
						<span>
							Hub Name: <strong> Best Hub </strong>{" "}
						</span>
					</Boxes>
					<Boxes>
						<BoxOneIconHold
							style={{
								backgroundColor: "#89087E",
							}}>
							{" "}
							<MdAdminPanelSettings />{" "}
						</BoxOneIconHold>
						<span>
							Admin's Name: <strong> Opeyemi </strong>
						</span>
					</Boxes>
					<Boxes>
						<BoxOneIconHold
							style={{
								backgroundColor: "#1FAE04",
							}}>
							{" "}
							<IoQrCode />{" "}
						</BoxOneIconHold>
						<span>
							Hub Key: <strong> 268209823 </strong>
						</span>
					</Boxes>
				</RowOne>
				<Title>Today's Update</Title>
				<StaffCard>
					<CardHold>
						<ImageBox>O</ImageBox>
						<TopButtom>
							<StaffName> Olorunda Samuel </StaffName>
							<Buttom>
								<Detail>posted to Willma hub</Detail>
							</Buttom>
						</TopButtom>
					</CardHold>
				</StaffCard>
				<StaffCard>
					<CardHold>
						<ImageBox>G</ImageBox>
						<TopButtom>
							<StaffName> Ekeke Gedion </StaffName>
							<Buttom>
								<Detail>Posted to Jakande Hub</Detail>
							</Buttom>
						</TopButtom>
					</CardHold>
				</StaffCard>
			</Wrapper>
		</Container>
	);
};

export default StaffBoard;

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
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;

	@media (max-width: 500px) {
		width: 90%;
	}
`;

const RowOne = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
	flex-wrap: wrap;
	@media (max-width: 768px) {
		justify-content: center;
	}
`;
const Boxes = styled.div`
	height: 120px;
	width: 300px;
	background-color: #fff;
	margin: 10px 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	text-align: center;

	@media (max-width: 770px) {
		width: 90%;
	}

	span {
		font-size: 15px;
	}
`;

const BoxOneIconHold = styled.div`
	height: 60px;
	width: 60px;
	border-radius: 50%;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
`;

const Title = styled.div`
	font-size: 30px;
	font-weight: 900;
	margin-bottom: 20px;
`;
const StaffCard = styled.div`
	width: 80%;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	margin: 10px 0;
	border-radius: 5px;
	@media (max-width: 500px) {
		width: 100%;
	}
`;

const CardHold = styled.div`
	display: flex;
	margin: 15px 0;
`;
const ImageBox = styled.div`
	height: 50px;
	width: 50px;
	background-color: skyblue;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 20px;
	border-radius: 50%;
	font-size: 20px;
	font-weight: 800;
	color: #fff;
`;
const TopButtom = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
	}
`;
const StaffName = styled.div`
	font-size: 13px;
	font-weight: 800;
	margin-right: 5px;
	@media (max-width: 500px) {
		width: 180px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;
const Buttom = styled.div`
	display: flex;
	align-items: center;
`;
const Detail = styled.div`
	font-size: 13px;
	color: #7638ff;
	font-weight: bold;
	margin-right: 20px;
`;
