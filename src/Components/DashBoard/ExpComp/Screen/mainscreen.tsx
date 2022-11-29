import React from "react";
import styled from "styled-components";
const Mainscreen = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Holder>
            <Top>
              <Box>
                <Boxhold>
                  <Up>
                    <Text>
                      <H1>Amount Due</H1>
                      <Number>1,654</Number>
                    </Text>
                  </Up>
                  <Mid>
                    <Yellow></Yellow>
                  </Mid>
                  <Down>
                    <span>1.5%</span> since last week
                  </Down>
                </Boxhold>
              </Box>
              <Box>
                <Boxhold>
                  <Ups>
                    <Text>
                      <H1>Customers</H1>
                      <Number>94</Number>
                    </Text>
                  </Ups>
                  <Mid>
                    <Skyblue></Skyblue>
                  </Mid>
                  <Down>
                    <h1>3.7%</h1> since last week
                  </Down>
                </Boxhold>
              </Box>
              <Box>
                <Boxhold>
                  <Upd>
                    <Text>
                      <H1>Invoices</H1>
                      <Number>94</Number>
                    </Text>
                  </Upd>
                  <Mid>
                    <Red></Red>
                  </Mid>
                  <Down>
                    <h2>4.5%</h2> since last week
                  </Down>
                </Boxhold>
              </Box>
              <Box>
                <Boxhold>
                  <Upg>
                    <Text>
                      <H1>Estimates</H1>
                      <Number>108</Number>
                    </Text>
                  </Upg>
                  <Mid>
                    <Purple></Purple>
                  </Mid>
                  <Down>
                    <h3>2.5%</h3> since last week
                  </Down>
                </Boxhold>
              </Box>
            </Top>
            <Middle>
              <Card></Card>
              <Carded></Carded>
            </Middle>
          </Holder>
        </Wrapper>
      </Container>
    </>
  );
};
export default Mainscreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #f7f8f9;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Box = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  margin-top: 10px;
`;
const Boxhold = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Up = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Ups = styled.div`
  width: 75%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Upd = styled.div`
  width: 68%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Upg = styled.div`
  width: 70%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 16px;
`;
const Number = styled.div`
  font-size: 16px;
`;
const Mid = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;
const Yellow = styled.div`
  background-color: yellow;
  width: 60%;
  height: 100%;
`;
const Skyblue = styled.div`
  background-color: skyblue;
  width: 80%;
  height: 100%;
`;
const Red = styled.div`
  background-color: red;
  width: 50%;
  height: 100%;
`;
const Purple = styled.div`
  width: 30%;
  background-color: purple;
  height: 100%;
`;
const Down = styled.div`
  color: black;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 60%;

  span {
    color: yellow;
    font-size: 13px;
    font-weight: bold;
  }
  h1 {
    color: skyblue;
    font-size: 13px;
    font-weight: bold;
  }
  h2 {
    color: red;
    font-size: 13px;
    font-weight: bold;
  }
  h3 {
    color: purple;
    font-size: 13px;
    font-weight: bold;
  }
`;
const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Card = styled.div`
  width: 600px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Carded = styled.div`
  width: 450px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
