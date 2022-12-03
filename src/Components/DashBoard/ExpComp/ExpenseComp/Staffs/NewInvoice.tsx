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
            <InputDiv placeholder="e.g Cost Of Fuel" />
          </ContHold>
          <ContHold>
            <label>Invoice Value</label>
            <InputDiv placeholder="₦2,500" />
          </ContHold>
          <Button>Add Invoice</Button>
        </InputFieldsHold>
        <InvoiceDisplay>
          <InvoiceCard>
            <CardHold>
              <ImageBox>c</ImageBox>
              <TopButtom>
                <ProductTitle>Cost Of Fuel</ProductTitle>
                <hr
                  style={{
                    height: "90%",
                  }}
                />
                <Buttom>
                  <Price>₦2,500</Price>
                </Buttom>
              </TopButtom>
            </CardHold>
          </InvoiceCard>
          <InvoiceCard>
            <CardHold>
              <ImageBox>r</ImageBox>
              <TopButtom>
                <ProductTitle>Repair of Fan</ProductTitle>
                <hr
                  style={{
                    height: "90%",
                  }}
                />
                <Buttom>
                  <Price>₦3,700</Price>
                </Buttom>
              </TopButtom>
            </CardHold>
          </InvoiceCard>
          <Button>Update Total Invoice</Button>
        </InvoiceDisplay>
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

const InputFieldsHold = styled.div`
  margin-bottom: 30px;
`;
const ContHold = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 11px;
    font-weight: 600;
  }
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
  border: 2px solid #10004174;

  ::placeholder {
    font-weight: 700;
    font-size: 13px;
    color: gray;
  }
`;

const Button = styled.button`
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

const InvoiceDisplay = styled.div`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const InvoiceCard = styled.div`
  width: 600px;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
  margin: 10px 0;
  /* box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px; */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CardHold = styled.div`
  display: flex;
  padding: 10px 0;
`;
const ImageBox = styled.div`
  height: 40px;
  width: 40px;
  background-color: #926efc;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 20px;
  border-radius: 50%;
  font-size: 25px;
  font-weight: 800;

  img {
    width: 40px;
    object-fit: contain;
  }
`;
const TopButtom = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;
const ProductTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  margin-right: 20px;
`;
const Buttom = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.div`
  font-size: 15px;
  color: darkorange;
  font-weight: bold;
  margin-right: 20px;
`;
