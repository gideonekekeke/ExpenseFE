import React from "react";
import styled from "styled-components";

const NewInvoice = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Today's Invoice</Title>
        <InputFieldsHold>
          <ContHold>
            <label>Invoice Field</label>
            <InputDiv />
          </ContHold>
        </InputFieldsHold>
      </Wrapper>
    </Container>
  );
};

export default NewInvoice;

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
  width: 90%;
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

const InputFieldsHold = styled.div``;
const ContHold = styled.div``;

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
