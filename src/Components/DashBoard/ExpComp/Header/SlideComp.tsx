import React from "react";
import styled from "styled-components";
import { FaCube, FaCubes, FaFilePdf } from "react-icons/fa";
import { MdDashboard, MdGroup, MdInventory, MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SlideComp = () => {
  return (
    <Container>
      <Text>Menu</Text>
      <Wrap>
        <Hold to="/admin-dashboard">
          <Icon1 />
          <Write>Dashboard</Write>
        </Hold>
        <Hold to="/staff">
          <Icon2 />
          <Write>Staff</Write>
        </Hold>
        <Hold to="/expense">
          <Icon3 />
          <Write>Expenses</Write>
        </Hold>
        <Hold to="/">
          <Icon4 />
          <Write>Income</Write>
        </Hold>
        <Hold to="/">
          <Icon5 />
          <Write>Estimates</Write>
        </Hold>
        <Hold to="/">
          <Icon6 />
          <Write>Invoices</Write>
        </Hold>
        <Hold to="/">
          <Icon7 />
          <Write>Settings</Write>
        </Hold>
      </Wrap>
    </Container>
  );
};

export default SlideComp;

const Container = styled.div``;

const Wrap = styled.div`
  /* width: 90%; */
  height: 45%;
  margin-top: 23px;
  /* padding-left: 15px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  // background-color: red;
`;
const Text = styled.div`
  padding-left: 15px;
  font-weight: bold;
  color: #aaa;
  font-size: 13px;
  margin-top: 20px;
`;
const Hold = styled(NavLink)`
  width: 255px;
  display: flex;
  align-items: center;
  height: 70px;
  cursor: pointer;
  text-decoration: none;
  /* border-right: 1px solid purple; */

  /* :active{
    border-left: 5px solid #7638ff;
    background-color: #f8f5ff;
    color: #7638ff;

  } */

  :focus {
    border-left: 5px solid #7638ff;
    background-color: #f8f5ff;
    color: #7638ff;
  }
`;
const Write = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #aaa;
  margin-left: 7px;
  font-size: 13px;
  cursor: pointer;

  :active {
    color: #7638ff;
  }
`;
const Icon1 = styled(MdDashboard)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon2 = styled(MdGroup)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon3 = styled(FaCube)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon4 = styled(FaCubes)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon5 = styled(FaFilePdf)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon6 = styled(MdInventory)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon7 = styled(MdSettings)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon8 = styled.div``;
