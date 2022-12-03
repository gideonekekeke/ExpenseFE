import React, { useState } from "react";
import * as yup from "yup";
import { useRecoilValue, useRecoilState } from "recoil";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { expenseData, totalReport } from "../../../../Global/GlobalState";
import { useNavigate } from "react-router-dom";
// import { salesData, userDecode } from "";

import styled from "styled-components";

interface iItem {
  item: string;
  cost: number;
  status: string;
}

interface iProps {
  title: string;
  bg: string;
}

const ExpenseRecord: React.FC<iProps> = ({ title, bg }) => {
  const [expenseItemData, setExpenseItemData] = useRecoilState(expenseData);
  const [totalItem, setTotalItem] = useRecoilState(totalReport);
  const yupSchema = yup.object().shape({
    cost: yup.number().required("This field has to be filled"),
    item: yup.string().required("This field has to be filled"),
  });

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<iItem>({
    resolver: yupResolver(yupSchema),
  });

  const onSubmitExpense: SubmitHandler<iItem> = async (data) => {
    const { item, cost } = data;
    setExpenseItemData([
      ...expenseItemData,
      { item, cost, status: "expense", id: totalItem.length + 1 },
    ]);
    setTotalItem([
      ...totalItem,
      { item, cost, status: "expense", id: totalItem.length + 1 },
    ]);
    reset();
  };

  return (
    <InputFieldsHold onSubmit={handleSubmit(onSubmitExpense)}>
      <ContHold>
        <label>Expense Item</label>
        <InputDiv placeholder="e.g Cost Of Fuel" {...register("item")} />
        <Error>{errors.item && "Please Enter this field "}</Error>
      </ContHold>
      <ContHold>
        <label>Expense Cost</label>
        <InputDiv placeholder="₦2,500" {...register("cost")} />
        <Error>
          {errors.cost && "Please Enter the cost for the field above"}
        </Error>
      </ContHold>
      <Button type="submit" bg={bg}>
        {title}
      </Button>
    </InputFieldsHold>
  );
};

export default ExpenseRecord;

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

const Button = styled.button<{ bg: string }>`
  height: 50px;
  width: 100%;
  border: none;
  outline: none;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  /* background-color: #377dff; */
  background-color: ${({ bg }) => bg};
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
