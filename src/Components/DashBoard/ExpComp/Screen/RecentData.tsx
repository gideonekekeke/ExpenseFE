import React from 'react'
import styled from 'styled-components'
import {BiDotsHorizontalRounded} from "react-icons/bi"

const RecentData = () => {
  return (
      <Container>
          <Buttom>
          <Head>
            <Th>Customer</Th>
            <Th>Amount</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
            <Th>Action </Th>
          </Head>
          <Head>
          <Td><UserHold>
          <span><Image /></span>Barbara Moore
          </UserHold></Td>
            <Td>$222</Td>
            <Td>18 Nov 2020</Td>
            <Td>Sent</Td>
            <Td><BiDotsHorizontalRounded size="30px"/> </Td>
          </Head>
        </Buttom>
    </Container>
  )
}

export default RecentData

const Container = styled.div`
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gold;
  margin-right: 10px;
`
const UserHold = styled.div`
  display: flex;
  align-items: center;
`
const Td = styled.td`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
`
const Th = styled.th`
  padding: 10px 15px;

  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  text-align: start;

`
const Head = styled.tr`
    /* width: 500px; */
  border-bottom: 1px solid lightgray;

`
const Buttom = styled.table`
  /* padding: 10px 20px; */
  background-color: #f8f9fa;
  // width: 74.34rem;
  width: 40rem;
  /* height: 300px; */

  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
`