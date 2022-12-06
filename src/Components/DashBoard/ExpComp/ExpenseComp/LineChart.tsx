import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { userDecode } from "../../../Global/GlobalState";
import { useRecoilValue } from "recoil";
import numeral from "numeral";

const url = "https://event-3p90.onrender.com";

interface iData {
  _id: string;
  submittedBy: string;
  image: string;
  totalExpense: number;
  totalSales: number;
  hubName: string;
  date: string;
  profit: number;
  map(): () => {};
  // flat(): void
}

const LineChart: React.FC = () => {
  const user = useRecoilValue(userDecode);

  const sortedSales = (props: any) => {
    return (a: any, b: any) => {
      if (a[props] > b[props]) {
        return -1;
      } else {
        return 0;
      }
    };
  };

  const groupBy = (props: any, items: any) => {
    return props.reduce((data: any, item: any) => {
      (data[item[items]] = data[item[items]] || []).push(item);
      return data;
    }, {});
  };

  const [salesDated, setSalesDated] = useState([] as any[]);
  const [data, setData] = useState<any[]>([]);
  const [sales, setSales] = useState([] as iData[]);

  const getAll = async () => {
    const newURL = `${url}/api/sales/${user._id}/record`;
    await axios.patch(newURL).then((res) => {
      setSales(res.data.data.salesRecord.sort(sortedSales("profit")));
    });
  };
  const getDays = () => {
    setData(Object.keys(groupBy(sales, "dated")));
  };
  const getAllDated = async () => {
    let data = Object.values(groupBy(sales, "dated")).flat();
    setSalesDated(
      data
        .map((el: any) => el.profit)
        .reduce((a: number, b: number) => {
          return a + b;
        })
    );
  };

  useEffect(() => {
    getAllDated();
    getAll();
    getDays();
  }, []);
  return (
    <Holder>
      {/* {salesDated.map((props, i) => (
        <div key={i}>
          <Container>
            <Chart he="70%" />
          </Container>
        </div>
      ))} */}

      {data.map((props, i) => (
        <div key={i}>
          <Container>
            <Chart he="70%" />
            <div>{props}</div>
          </Container>
        </div>
      ))}
    </Holder>
  );
};

export default LineChart;

const DivData = styled.div`
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  margin: 0 20px;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80px;
  height: 100%;
`;

const Chart = styled.div<{ he: string }>`
  margin: 0 20px;
  background-color: #012e8f;
  height: ${({ he }) => he};
  width: 20px;
  border-radius: 5px 5px 0 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 230px;
`;

const Container = styled.div`
  width: 80px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Holder = styled.div`
  display: flex;
  width: 520px;
  height: 230px;
  background-color: rgba(0, 0, 0, 0.05);
`;
