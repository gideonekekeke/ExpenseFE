import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import LoadingState from "../../../LoadingScreen";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import { user } from "../../Global/GlobalState";
import { useRecoilValue, useRecoilState } from "recoil";

interface iData {
  name: string;
  password: string;
}

const url = "https://event-3p90.onrender.com";
const url2 = "http://localhost:2233";

const SignIn = () => {
  const naviage = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  //   const users = useRecoilValue(user);
  const [users, setUsers] = useRecoilState(user);

  const yupSchema = yup.object().shape({
    name: yup.string().required("This field has to be filled"),
    password: yup.string().required("This field has to be filled"),
  });

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<iData>({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit: SubmitHandler<iData> = async (data) => {
    const { name, password } = data;

    setLoading(true);

    await axios
      .post(`${url}/api/company/signin`, { name, password })
      .then((res) => {
        console.log(res.data.data);
        // setUsers(res.data.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome back",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          //   naviage("/");
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        Swal.fire({
          title: error.response.data.message,
          text: `Please varify your account first`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          setLoading(false);
        });
      });
  };

  return (
    <Container>
      {loading ? <LoadingState /> : null}
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
            <SignTitle>Sign In</SignTitle>
            <SignSubTitle>To Access Your Company's Record</SignSubTitle>
            <InputForm onSubmit={handleSubmit(onSubmit)}>
              <InputDiv placeholder="Company Name" {...register("name")} />
              <Error>{errors.name && "Company name is required"}</Error>
              <InputDiv
                placeholder="Password"
                {...register("password")}
                type="password"
              />
              <Error>{errors.password && "Company password is required"}</Error>

              <InputButton type="submit">Sign In</InputButton>

              <NavLink
                to="/forgotpassword"
                style={{
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                <Forgot>Forgot Password?</Forgot>
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
          <ImgMain src="/assets/in.png" alt="" />
        </ImagePart>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

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
  /* font-family: Montserrat; */
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
  margin-bottom: 10px;
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
  /* font-family: Montserrat; */
  padding-left: 20px;
  border: 2px solid #10004174;

  ::placeholder {
    font-weight: 500;
    font-size: 13px;
    color: gray;
  }
`;
const InputButton = styled.button`
  height: 50px;
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
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.015);
  }
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
