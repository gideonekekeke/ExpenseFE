import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
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

interface iData2 {
  _id?: string;
  name?: string;
  staff?: string;
  createdAt?: string;
  updatedAt?: string;
  hubToken?: string;
}

const RecentComp = () => {
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

  const [sales, setSales] = useState([] as iData[]);
  const [salesDated, setSalesDated] = useState([] as any[]);

  const user = useRecoilValue(userDecode);
  const [staffData, setStaffData] = useState({} as iData2);

  const getAll = async () => {
    const newURL = `${url}/api/sales/${user._id}/record`;
    await axios.patch(newURL).then((res) => {
      setSales(res.data.data.salesRecord.sort(sortedSales("profit")));
    });
  };

  const getAllDated = async () => {
    let data = Object.values(groupBy(sales, "dated")).flat();
    // setSalesDated(Object.values(groupBy(sales, "dated")));
    setSalesDated(
      data
        .map((el: any) => el.profit)
        .reduce((a: number, b: number) => {
          return a + b;
        })
    );
  };

  const getStaff = async () => {
    const newURL = `${url}/api/hub/${user._id}/hubstaff`;
    await axios.get(newURL).then((res) => {
      setStaffData(res.data.data);
      console.log("getting all ", staffData);
    });
  };

  useEffect(() => {
    getAll();
    getStaff();
    getAllDated();
  }, []);

  return (
    <Container>
      <h3>Staff Leading Sales Record</h3>
      <Buttom>
        <Head>
          <Th>
            <HoldHead>
              Staff
              <span>
                <FaLongArrowAltUp color="lightgray" />
                <FaLongArrowAltDown color="lightgray" />
              </span>
            </HoldHead>
          </Th>
          <Th>
            <HoldHead>
              Registered Date{" "}
              <span>
                <FaLongArrowAltUp color="lightgray" />
                <FaLongArrowAltDown color="lightgray" />
              </span>
            </HoldHead>
          </Th>

          <Th>
            <HoldHead>
              Profit{" "}
              <span>
                <FaLongArrowAltUp color="lightgray" />
                <FaLongArrowAltDown color="lightgray" />
              </span>
            </HoldHead>
          </Th>
          <Th>
            <HoldHead>
              Total Sales{" "}
              <span>
                <FaLongArrowAltUp color="lightgray" />
                <FaLongArrowAltDown color="lightgray" />
              </span>
            </HoldHead>
          </Th>
          <Th>
            <HoldHead>
              Total Expense{" "}
              <span>
                <FaLongArrowAltUp color="lightgray" />
                <FaLongArrowAltDown color="lightgray" />
              </span>
            </HoldHead>
          </Th>
        </Head>

        {sales?.map((props) => (
          <Body key={props._id}>
            <Td>
              <UserHold>
                <span>
                  <Image src={props.image} />
                </span>
                {props.submittedBy}
              </UserHold>
            </Td>
            <Td>{props.date}</Td>

            <Td> ₦ {numeral(props.profit).format("0,0")} </Td>
            <Td> ₦{numeral(props.totalSales).format("0,0")} </Td>
            <Td> ₦{numeral(props.totalExpense).format("0,0")} </Td>
          </Body>
        ))}
      </Buttom>
    </Container>
  );
};

export default RecentComp;

const Container = styled.div`
  width: 90%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  background-color: white;

  @media screen and (max-width: 700px) {
    width: 94%;
  }
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gold;
  margin-right: 10px;
  object-fit: cover;
`;
const Button = styled.button<{ bd: string; cl: string }>`
  padding: 7px 20px;
  background-color: #ece5e5;
  border: ${({ bd }) => (bd ? "1px solid gray" : "0px")};
  border-radius: 5px;
  margin: 5px;
  color: ${({ cl }) => (cl ? "#109f10" : "red")};
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
  font-family: Poppins;
  span {
    margin-left: 3px;
  }
`;
const Hold = styled.div``;
const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserHold = styled.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`;
const Td = styled.td`
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 400;
  width: 250px;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: rgba(0, 0, 0, 0.1);
`;
const Th = styled.th`
  padding: 10px 10px;
  background-color: #f8f9fa;
  width: 250px;
  /* #f8f9fa */
  color: #1b2559;
  font-size: 13px;
  font-weight: 600;
  text-align: start;
  // border: 1px solid black;
`;
const Head = styled.tr`
  border-bottom: 1px solid lightgray;
  background-color: white;
`;
const Body = styled.tr`
  border-bottom: 1px solid lightgray;
  :hover {
    background-color: lightgray;
  }
`;
const Buttom = styled.table`
  width: 78rem;
  /* padding: 0px 20px; */

  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
`;
