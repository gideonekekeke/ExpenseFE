import React from "react";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <Container>
      <Wrapper>
        <InputPart>
          <IconTop>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              <FiArrowLeftCircle />
            </NavLink>
          </IconTop>
          <SignInputHold>
            <SignTitle>Forgot Password?</SignTitle>
            <SignSubTitle>Enter Your Mail To Reset Now</SignSubTitle>
            <InputForm>
              <InputDiv placeholder="Email" />
              <Error>Err</Error>

              <InputButton type="submit">Request Now</InputButton>
              <NavLink
                to="/signinadmin"
                style={{
                  textDecoration: "none",
                }}
              >
                <Forgot>Remember Password?</Forgot>
              </NavLink>
            </InputForm>
            <HasAcc>
              Don't have an account?{" "}
              <NavLink
                to="/signupadmin"
                style={{
                  textDecoration: "none",
                }}
              >
                <span>Sign Up</span>
              </NavLink>
            </HasAcc>
          </SignInputHold>
        </InputPart>
        <ImagePart>
          <ImgMain src="/assets/got.png" alt="" />
        </ImagePart>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;

const Forgot = styled.div`
  font-size: 11px;
  font-weight: 700;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const InputPart = styled.div``;
const ImagePart = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;
// const IconTop = styled(NavLink)`
const IconTop = styled.div`
  font-size: 30px;
  text-decoration: none;
  /* color: ${(props) => props.theme.textColor}; */
`;
const SignInputHold = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const SignTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  /* color: ${(props) => props.theme.textColor}; */
`;
const SignSubTitle = styled.div`
  font-size: 12px;
  color: #77838f;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const InputDiv = styled.input`
  height: 45px;
  width: 280px;
  margin: 4px 0;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 13px;
  background-color: #926efc74;
  font-family: Montserrat;
  padding-left: 20px;
  ::placeholder {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 13px;
    /* color: #377dff; */
    color: #000;
    /* padding-left: 20px; */
  }
`;
const InputButton = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  /* background-color: #377dff; */
  background-color: #000;
  border-radius: 3px;
  margin-top: 10px;
`;
const HasAcc = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  span {
    color: #926efc;
    cursor: pointer;
    font-weight: 600;
  }
`;

const ImgMain = styled.img`
  width: 350px;
  margin-top: -65px;
`;

const Error = styled.div`
  font-size: 10px;
  color: red;
`;
