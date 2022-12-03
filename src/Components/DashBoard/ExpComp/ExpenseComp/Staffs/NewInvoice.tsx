import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import LoadingState from "../../../../../LoadingScreen";
import { useNavigate } from "react-router-dom";
import {
  salesReport,
  totalReport,
  userDecode,
  expenseData,
} from "../../../../Global/GlobalState";

import numeral from "numeral";
import SalesInput from "./SalesInput";
import ExpenseRecord from "./ExpenseREcord";

const url = "https://event-3p90.onrender.com";

interface iItemData {
  _id: string;
  userName: string;
  userImage: string;
}

interface iItem {
  item: string;
  status: string;
  cost: number;
  id: number;
}

interface iData {
  _id?: string;
  name?: string;
  staff?: string;
  createdAt?: string;
  hubToken?: string;
}

const NewInvoice = () => {
  const naviage = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [val, setVal] = useState<string>("");

  const [expense, setExpense] = useState<number>(0);
  const [sales, setSales] = useState<number>(0);

  const user = useRecoilValue(userDecode);

  const [expenseItemData, setExpenseItemData] = useRecoilState(expenseData);
  const [totalItem, setTotalItem] = useRecoilState(totalReport);
  const [myItem, setMytem] = useRecoilState(salesReport);

  const [staffData, setStaffData] = useState({} as iData);
  const getTotal = useRecoilValue(totalReport);

  const yupSchema = yup.object().shape({
    cost: yup.number().required("This field has to be filled"),
    item: yup.string().required("This field has to be filled"),
  });

  const { reset, handleSubmit } = useForm<iItem>({
    resolver: yupResolver(yupSchema),
  });

  const getStaff = async () => {
    const newURL = `${url}/api/hub/${user._id}/hubstaff`;
    await axios.get(newURL).then((res) => {
      setStaffData(res.data.data);
    });
  };

  const updateSales = async () => {
    // const newURL = `${url}/api/sales/${hubID}/${user._id}/create`;
    const newURL = `${url}/api/sales/${staffData._id}/${user._id}/create`;
    await axios
      .post(newURL, { totalExpense: expense, totalSales: sales })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Sales Report as been submitted`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          naviage(-1);
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        Swal.fire({
          title: error.response.data.message,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          setLoading(false);
        });
      });
  };

  useEffect(() => {
    getStaff();
    setExpense(
      expenseItemData
        .map((el: any) => el.cost)
        .reduce((a: number, b: number) => {
          return a + b;
        })
    );

    setSales(
      myItem
        .map((el: any) => el.cost)
        .reduce((a: number, b: number) => {
          return a + b;
        })
    );
  }, []);
  console.log(expense);
  console.log(sales);

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Wrapper>
        <Title>Today's Report for {staffData.name}</Title>
        <Holder>
          <div style={{ margin: "10px" }}>
            <ExpenseRecord title="Enter Expense" bg="red" />
          </div>
          <div style={{ margin: "10px" }}>
            <SalesInput title="Enter Sales" bg=" green" />
          </div>
        </Holder>
        <InvoiceDisplay>
          <InvoiceCard>
            {getTotal.map((props: iItem) => (
              <CardHold key={props.id}>
                {props.status === "expense" ? (
                  <ImageBox bg="">
                    {props.status.charAt(0).toUpperCase()}
                  </ImageBox>
                ) : (
                  <ImageBox bg="f">
                    {props.status.charAt(0).toUpperCase()}
                  </ImageBox>
                )}
                <TopButtom>
                  <ProductTitle>{props.item}</ProductTitle>
                  {/* <hr
                    style={{
                      height: "90%",
                    }}
                  /> */}
                  <Buttom>
                    <Price>
                      {props.status === "expense" ? (
                        <div style={{ color: "red" }}>
                          ₦{numeral(props.cost).format("0,0")}
                        </div>
                      ) : (
                        <div style={{ color: "green" }}>
                          ₦{numeral(props.cost).format("0,0")}
                        </div>
                      )}
                    </Price>
                  </Buttom>
                </TopButtom>
              </CardHold>
            ))}
          </InvoiceCard>

          <InputFieldsHold></InputFieldsHold>

          <InputFieldsHold>
            <Holder>
              <div style={{ margin: "10px" }}>
                Total Expenses Made so for is:{" "}
                <strong>₦{numeral(expense).format("0,0")}</strong>
              </div>
              <div style={{ margin: "10px" }}>
                Total Sales Made so for is:{" "}
                <strong>₦{numeral(sales).format("0,0")}</strong>
              </div>
            </Holder>
          </InputFieldsHold>
          <ContHold>
            <label>Enter Hub Token</label>
            <InputDiv
              placeholder=" hubToken: 2e89"
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
              }}
            />
          </ContHold>
          {staffData.hubToken === token ? (
            <Button
              onClick={() => {
                setMytem([]);
                setTotalItem([]);
                setExpenseItemData([]);
                updateSales();
              }}
            >
              Submit Today's Report
            </Button>
          ) : (
            <Button
              disabled
              onClick={() => {
                setMytem([]);
                setTotalItem([]);
                setExpenseItemData([]);
                updateSales();
              }}
            >
              Enter the Right Token to Submit Today's Report
            </Button>
          )}
        </InvoiceDisplay>
      </Wrapper>
    </Container>
  );
};

export default NewInvoice;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Error = styled.div`
  font-size: 10px;
  color: red;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
`;

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

const InputFieldsHold = styled.form`
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
const ImageBox = styled.div<{ bg: string }>`
  height: 40px;
  width: 40px;
  background-color: ${({ bg }) => (bg ? "red" : "green")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 20px;
  border-radius: 50%;
  font-size: 25px;
  font-weight: 800;
  color: white;

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
