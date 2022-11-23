import React from "react";
import styled from "styled-components";

const SignUpMessage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign Up Sucessfull 🥳🥳🥳</Title>
        <Message>
          An Email has been sent to your mail, Please go to your mail to verify
        </Message>
      </Wrapper>
    </Container>
  );
};

export default SignUpMessage;

const Container = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 70%;
  height: 70vh;
  background-color: #926efc;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
`;
const Message = styled.div``;
