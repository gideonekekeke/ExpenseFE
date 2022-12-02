
import axios from "axios";
import { useEffect, useState } from "react";

import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userDecode } from "../../../Global/GlobalState";

const url = "https://event-3p90.onrender.com";
const Staffs = () => {
  const readUser = useRecoilValue(userDecode);
  const [staffData, setStaffData] = useState([]);

  const getStaff = async () => {
    const newURL = `${url}/api/staff/${readUser._id}/company`;
    await axios.get(newURL).then((res) => {
      setStaffData(res.data.data.staff);
      console.log("Data: ", staffData);
    });
  };

  useEffect(() => {
    getStaff();
  }, []);
  return (
    <Container>
      <Wrapper>
        {staffData.length >= 1 ? (
          <>
            <Title>My Staffs</Title>
            {staffData?.map((props: any) => (
              <StaffCard>
                <CardHold>
                  <ImageBox>
                    <img src={props.userImage} />
                  </ImageBox>
                  <TopButtom>
                    <StaffName> {props.userName}</StaffName>

                    <Buttom>
                      <Detail>{props.email}</Detail>
                    </Buttom>
                  </TopButtom>
                </CardHold>
              </StaffCard>
            ))}
          </>
        ) : (
          <EmptyStaff>
            <StaffImage src="/assets/staff/s3.svg" />
            <h1>Staff Empty !</h1>
            <p>You currently don't have any staff registered .</p>
          </EmptyStaff>
        )}
      </Wrapper>
    </Container>
  );

};

export default Staffs;

const EmptyStaff = styled.div`
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
`;
const StaffImage = styled.img`
  height: 100%;
  width: 200px;
  object-fit: contain;
`;

// const Container = styled.div`
//   width: 100%;
//   font-family: montserrat;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;
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
  margin-top: 50px;

  @media (max-width: 500px) {
    width: 90%;
    justify-content: center;
    display: flex;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
`;
const StaffCard = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CardHold = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 500px) {
    margin-right: 0;
    /* background-color: red; */
  }
`;
const ImageBox = styled.div`
  height: 80px;
  width: 80px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const TopButtom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-top: 10px;

  @media (max-width: 500px) {
    /* flex-direction: column;
		align-items: flex-start;
		justify-content: space-around; */
  }
`;
const StaffName = styled.div`
  font-size: 17px;
  font-weight: 800;
  /* margin-right: 20px; */
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
