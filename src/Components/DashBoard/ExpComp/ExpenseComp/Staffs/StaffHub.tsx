import React from "react";
import styled from "styled-components";

interface iProps {
  id?: string;
}
const StaffHub: React.FC<iProps> = ({ id }) => {
  console.log(id);
  return (
    <div>
      {" "}
      <CardHold>
        <ImageBox>O</ImageBox>
        <TopButtom>
          <StaffName> {"user.userName"} </StaffName>
          <Buttom>
            <Detail>posted to {"staffData.name"}</Detail>
          </Buttom>
        </TopButtom>
      </CardHold>
    </div>
  );
};

export default StaffHub;

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
