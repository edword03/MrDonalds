import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${((props) => `url(${props.img})`)};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: white;
  z-index: 1;
  font-size: 30px;
  line-height: 35px;
  transition: 0.3s ;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 50%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5)
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(item => (
      <Item
        img={item.img}
        key={item.id}
        onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
      </Item>
    ))}
  </List>
);
