import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Auth = () => {
  return (
    <Container>
      <Wrapper>
        <LogoHold>
          <Logo>
            <img src="/assets/lo.png" alt="Logo" />
            E-Tracker
          </Logo>
        </LogoHold>
        <Hrr />
        <AuthDiv>
          <AuthCard
            to="/signupadmin"
            style={{
              backgroundColor: "#14213d",
            }}
          >
            <AuthText>
              <TextContent>Sign in as an Company</TextContent>
              <SmallText>
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide
              </SmallText>
            </AuthText>
            <AuthImage src="/assets/perfect.png" alt="" />
          </AuthCard>
          {/* Second Card */}
          <AuthCard
            to=""
            style={{
              backgroundColor: "#fca311",
            }}
          >
            <AuthText>
              <TextContent>Sign in as a Staff</TextContent>
              <SmallText>
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide
              </SmallText>
            </AuthText>
            <AuthImage src="/assets/bay.png" alt="" />
          </AuthCard>
        </AuthDiv>
      </Wrapper>
    </Container>
  );
};

export default Auth;

const TextContent = styled.div`
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: raleway;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const LogoHold = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  @media (max-width: 500px) {
    width: 100%;
  }
  img {
    width: 70px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 900;
`;
const Hrr = styled.hr`
  height: 70vh;
  @media (max-width: 800px) {
    display: none;
  }
`;
const AuthDiv = styled.div``;
const AuthCard = styled(NavLink)`
  height: 120px;
  width: 500px;
  background-color: #120c6e;
  text-decoration: none;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: all 350ms;
  @media (max-width: 500px) {
    width: 300px;
  }
  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;
const AuthText = styled.div`
  width: 100%;
  padding-left: 20px;
  color: white;
  line-height: 1.2;
`;

const SmallText = styled.div`
  font-size: 11px;
  width: 250px;
`;
const AuthImage = styled.img`
  height: 230%;
  object-fit: fill;
`;
