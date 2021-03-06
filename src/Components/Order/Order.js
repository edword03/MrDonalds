import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { currency, totalPriceItem, totalCurrent } from '../Functions/secondaryFunction';


const OrderStyled = styled.div`
  left: 0px;
  top: 77px;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: calc(100% - 80px);
  background: #FFFFFF;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders }) => {

  const total = orders.reduce((result, order) => totalPriceItem(order) + result, 0);
  const totalCounter = orders.reduce((result, order) => order.count + result, 0)

  return(
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <OrderList>
          {orders.map(order => <OrderListItem order={order} />)}
        </OrderList> : 
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      <Total>
        <span>ИТОГО</span>
        <span>{totalCounter}</span>
        <TotalPrice>{currency(total)}</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  );
};