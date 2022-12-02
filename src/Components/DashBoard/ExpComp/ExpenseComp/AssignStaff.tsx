import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingState from "../../../../LoadingScreen";
import { useRecoilState, useRecoilValue } from "recoil";
import { userDecode } from "../../../Global/GlobalState";

interface iHubInfo {
  _id: string;
  name: string;
}

interface Iprops {
  ToggleStaff: () => void;
  getID: string;
  name: string;
}

interface iData {
  userName: string;
}

interface iStaff {
  _id: string;
  userName: string;
  userImage: string;
}

const url = "https://event-3p90.onrender.com";

const AssignStaff: React.FC<Iprops> = ({ ToggleStaff, getID, name }) => {
  const [readStaff, setReadStaff] = useState([] as iStaff[]);

  const naviage = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [val, setVal] = useState<string>("");
  const user = useRecoilValue(userDecode);
  const yupSchema = yup.object().shape({
    // userName: yup.string().required("This field has to be filled"),
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
    const newURL = `${url}/api/hub/${user._id}/${getID}/assign`;
    const newURL2 = `${url}/api/hub/${user._id}/${getID}/reset`;

    setLoading(true);

    await axios.patch(newURL2);

    await axios
      .post(newURL, { userName: val })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Staff has been added at ${name} center`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          naviage(-1);
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        Swal.fire({
          title: error.response.data.message,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          setLoading(false);
        });
      });
  };

  const getState = async () => {
    const newURL = `${url}/api/staff/${user._id}/company`;
    await axios.get(newURL).then((res) => {
      setReadStaff(res.data.data.staff);
    });
  };

  useEffect(() => {
    getState();
  }, []);
  console.log(val);
  return (
    <>
      {loading ? <LoadingState /> : null}
      <Container>
        <Card>
          <UpHold>
            <MainHold onSubmit={handleSubmit(onSubmit)}>
              <div
                style={{
                  width: "100%",
                }}
              >
                <Cancel>
                  <div></div>
                  <ImCancelCircle onClick={ToggleStaff} />
                </Cancel>
                <h3> Adding staff for, {name} Center </h3>

                <span>
                  Note : You can't assign a staff that has already been attached
                  to a hub
                </span>

                <Hold>
                  <Input
                    placeholder={val === "" ? "Enter name of your staff" : val}
                    // {...register("userName")}
                    value={val}
                    // onChange={() => {

                    // }}
                  />
                  <Error>
                    {errors.userName && "user name isn't in your payroll"}
                  </Error>
                </Hold>
                <br />

                {readStaff.map((props) => (
                  <DropItem bg="" key={props._id}>
                    <input
                      type="radio"
                      id="item1"
                      value={val}
                      onChange={(e) => {
                        setVal(props.userName);
                      }}
                    />
                    <Label htmlFor="subscribeNews">
                      <DivCan>
                        <ImaCan src={props.userImage} />
                        <DivDe>
                          {props.userName}
                          <pre style={{ color: "gray" }}>Staff </pre>
                        </DivDe>
                      </DivCan>
                    </Label>
                  </DropItem>
                ))}

                <button
                  style={{ backgroundColor: "silver" }}
                  type="submit"
                  onClick={() => {
                    console.log("Clicked");
                  }}
                >
                  Assign
                </button>
                <br />
              </div>
            </MainHold>
          </UpHold>
        </Card>
      </Container>
    </>
  );
};

export default AssignStaff;

const Error = styled.div`
  font-size: 10px;
  color: red;
  margin-top: 5px;
`;

const Input = styled.input`
  ::placeholder {
    font-family: Poppins;
  }
`;

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
  z-index: 9;
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

const MainHold = styled.form`
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
