import React from "react";
import styled from "styled-components";
import { AiOutlineMenuFold } from "react-icons/ai";
import SideBarComp from "./SideBar/SideBarComp";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sideShow, setSideShow] = React.useState(false);

  const toggleSideBar = () => {
    setSideShow(!sideShow);
  };
  return (
    <Container>
      <Logo>Expense-Tracker</Logo>
      <Navigation>
        <Nav>Platform</Nav>
        <Nav>Solution</Nav>
        <Nav>Customers</Nav>
        <Nav>Resources</Nav>
        <Nav>Company</Nav>
      </Navigation>
      <ButtonHold>
        <NavLink
          to="/auth"
          style={{
            textDecoration: "none",
          }}
        >
          <Button bd="1px solid gray" bg="transparent">
            Sign In
          </Button>
        </NavLink>
        <Button bd="" bg="#926efc">
          Watch Video
        </Button>
      </ButtonHold>

      <Menu onClick={toggleSideBar}>
        <AiOutlineMenuFold />
      </Menu>

      {sideShow ? <SideBarComp /> : null}
    </Container>
  );
};

export default Header;

const Menu = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    margin-right: 30px;
    font-size: 30px;
  }
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;
const Navigation = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    margin-right: 10px;
    display: none;
  }
`;
const Nav = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  transition: all 350ms;

  :hover {
    color: gray;
    cursor: pointer;
  }
`;
const ButtonHold = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-right: 10px;
    display: none;
  }
`;
const Button = styled.button<{ bg: string; bd: string }>`
  margin-left: 10px;
  margin-right: 10px;

  height: 40px;
  width: 120px;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 13px;
  color: white;
  border: ${(props) => props.bd};
  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(0.98);
  }
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;
