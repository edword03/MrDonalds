import React from 'react';
import styled from 'styled-components';
import trashImg from '../../images/trash.svg'
import { currency, totalPriceItem } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-image: url(${trashImg});
  background-position: center:
  background-size: cover:
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Toppings = styled.div`
  color: #9a9a9a;
  font-size: 14px;
  width: 100%;
`;

export const OrderListItem = ({ order }) => {
  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  return(
  <OrderItemStyled>
    <ItemName>{order.name} {order.choice} </ItemName>
    <span>{order.count}</span>
    <ItemPrice>{currency(totalPriceItem(order))}</ItemPrice>
    <TrashBtn/>
    {topping && <Toppings>Допы: {topping}</Toppings>}
  </OrderItemStyled>
)};