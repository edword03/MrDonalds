import React from 'react';
import styled from 'styled-components';
import trashImg from '../../images/trash.svg'
import { currency, totalPriceItem, totalCurrent } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
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

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>5</span>
    <ItemPrice>{currency(totalPriceItem(order))}</ItemPrice>
    <TrashBtn/>
  </OrderItemStyled>
);