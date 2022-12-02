import React from "react";
import styled from "styled-components";

const EditExpense: React.FC = () => {
	return (
		<Container>
			<Header>
				<Hold>
					<Title>Expense</Title>
					<Content>
						Dashboard /Expense / <span>Edit Expense</span>
					</Content>
				</Hold>
			</Header>
			<Wrapper>
				<Left>
					<Div>Category:</Div>
					<Select>
						<option>DevUps</option>
						<option>DevUps</option>
						<option>DevUps</option>
						<option>DevUps</option>
						<option>DevUps</option>
					</Select>
					<Div>Note:</Div>
					<Text placeholder='' />
				</Left>
				<Right>
					<Div>Date:</Div>
					<Input placeholder='Name' type='date' />
					<Div>Customer:</Div>
					<Cont>Lekki</Cont>
					<Div>Amount:</Div>
					<Input placeholder='$75' type='number' />

					<Button>Save Changes </Button>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default EditExpense;

const Cont = styled.div`
	width: 90%;
	height: 40px;
	border: 1px solid lightgray;
	border-radius: 5px;
	margin-bottom: 20px;
	background-color: #aca5a5;
	display: flex;
	align-items: center;
	padding-left: 10px;
	font-weight: 700;
`;
const Input = styled.input`
	width: 90%;
	height: 40px;
	border: 1px solid lightgray;
	border-radius: 5px;
	outline: none;
	margin-bottom: 20px;
`;
const Button = styled.button`
	/* padding: 10px 20px; */
	border: 0px;
	outline: none;
	color: white;
	font-weight: 700;
	background-color: blue;
	width: 150px;
	height: 40px;
	border-radius: 5px;
	/* float: right; */
	margin-left: 160px;
`;
const Right = styled.div`
	flex: 1;
	margin: 10px;
	display: flex;
	/* align-items: flex-end; */
	flex-direction: column;
`;
const Text = styled.textarea`
	width: 90%;
	height: 150px;
	border: 1px solid lightgray;
	border-radius: 5px;
`;
const Select = styled.select`
	width: 90%;
	margin-bottom: 20px;

	height: 40px;
	border: 1px solid lightgray;
	border-radius: 5px;
	outline: none;
`;
const Div = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: #6c6666;
	margin-bottom: 12px;
`;
const Left = styled.div`
	flex: 1;
	margin: 10px;
`;
const Content = styled.div`
	color: #18191a;
	font-weight: 500;

	span {
		color: #6c6666;
	}
`;
const Title = styled.div`
	font-size: 25px;
	font-weight: 600;
	color: #18191a;
`;
const Hold = styled.div`
	margin: 30px 0px;
`;
const Header = styled.div`
	width: 90%;
	max-width: 1500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Wrapper = styled.div`
	width: 90%;
	max-width: 1500px;

	background-color: white;
	padding: 20px 20px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	display: flex;

	@media (max-width: 800px) {
		flex-direction: column;
	}
	/* overflow-x: scroll; */
`;
const Container = styled.div`
	background-color: #f7f8f9;
	width: calc(100vw - 250px);
	/* width: 100%; */
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	overflow: hidden;
	position: absolute;
	right: 0px;
	top: 70px;

	@media screen and (max-width: 1005px) {
		width: 100%;
	}
`;
