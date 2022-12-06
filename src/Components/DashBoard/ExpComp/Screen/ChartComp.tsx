import React from "react";
import styled from "styled-components";
import DonutChart from "../ExpenseComp/DonutChart";
import LineChart from "../ExpenseComp/LineChart";

const ChartComp: React.FC = () => {
  return (
    <Container>
      <Card>
        <One>
          <Text>Sales Analystic</Text>
          <Texthold>
            <Test>Monthly</Test>
          </Texthold>
        </One>
        <Two>
          <Twohold>
            <Currencyhold>
              <Test>Total Sales</Test>
              <Currency>$1000</Currency>
            </Currencyhold>
            <Currencyhold>
              <Test>Expenses</Test>
              <Currency2>$500</Currency2>
            </Currencyhold>
            <Currencyhold>
              <Test>Receipt</Test>
              <Currency1>$100</Currency1>
            </Currencyhold>
            <Currencyhold>
              <Test>Earnings</Test>
              <Currency3>$300</Currency3>
            </Currencyhold>
          </Twohold>
        </Two>
        <Three>
          <LineChart />
        </Three>
      </Card>
      <Carded>
        <One>
          <Text>Invoice Analystic</Text>
          <Texthold>
            <Test>Monthly</Test>
          </Texthold>
        </One>
        <Four>
          <DonutChart />
        </Four>
      </Carded>
    </Container>
  );
};

export default ChartComp;

const Carded = styled.div`
  width: 410px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
  margin: 8px;
  @media (max-width: 1245px) {
    width: 92%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Card = styled.div`
  width: 520px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin: 8px;
  @media (max-width: 1245px) {
    width: 92%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 360px;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  /* align-items: center; */
`;

const Currency = styled.div`
  color: purple;
  font-weight: bold;
  font-size: 16px;
`;
const Currency1 = styled.div`
  color: green;
  font-weight: bold;
  font-size: 16px;
`;
const Currency2 = styled.div`
  color: red;
  font-weight: bold;
  font-size: 16px;
`;
const Currency3 = styled.div`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;
const Currencyhold = styled.div`
  display: flex;
  flex-direction: column;
`;
const Texthold = styled.div`
  border: 1.5px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 22px;
  /* margin-top: 20px; */
`;
const Text = styled.div`
  font-weight: bold;
  color: #aaa;
  font-size: 18px;
`;
const Test = styled.div`
  font-weight: bold;
  color: #aaa;
  font-size: 12px;
`;
const Four = styled.div`
  width: 100%;
  height: 290px;
  /* background-color: green; */
`;
const Three = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: green; */
`;
const Two = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
`;
const Twohold = styled.div`
  width: 95%;
  height: 100%;
  /* background-color: #294329; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 7px;
`;
const One = styled.div`
  width: 97%;
  padding: 5px;
  height: 40px;
  border-bottom: 1.7px solid #dadbdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
