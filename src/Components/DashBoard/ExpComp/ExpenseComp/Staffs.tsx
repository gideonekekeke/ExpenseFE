import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { user } from "../../../Global/GlobalState";

// {{url2}}/api/staff/63839116ce3a2c205dc0d26b/company
const url = "https://event-3p90.onrender.com";
const Staffs = () => {
  const userData = useRecoilValue(user);

  console.log(userData);
  return (
    <Container>
      <Wrapper>
        <Title>My Staffs</Title>
        <StaffCard>
          <CardHold>
            <ImageBox>
              <img src="/assets/perfect.png" alt="img" />
            </ImageBox>
            <TopButtom>
              <StaffName> Olorunda Samuel </StaffName>
              <Buttom>
                <Detail>olorundasamuel2@gmail.com</Detail>
              </Buttom>
            </TopButtom>
          </CardHold>
        </StaffCard>
        <StaffCard>
          <CardHold>
            <ImageBox>
              <img src="/assets/perfect.png" alt="img" />
            </ImageBox>
            <TopButtom>
              <StaffName> Olorunda Samuel </StaffName>
              <Buttom>
                <Detail>olorundasamuel2@gmail.com</Detail>
              </Buttom>
            </TopButtom>
          </CardHold>
        </StaffCard>
      </Wrapper>
    </Container>
  );
};

export default Staffs;

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
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
`;
const StaffCard = styled.div`
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  margin: 10px 0;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CardHold = styled.div`
  display: flex;
  margin: 15px 0;
`;
const ImageBox = styled.div`
  height: 60px;
  width: 60px;
  background-color: #fbf9fb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  img {
    width: 40px;
    object-fit: contain;
  }
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
  margin-right: 20px;
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
