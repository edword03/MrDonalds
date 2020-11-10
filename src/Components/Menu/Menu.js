import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import banner from '../../images/banner.png';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const Banner = styled.div`
  height: 210px;
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem 
        itemList={dbMenu.burger}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / напитки</h2>
      <ListItem
        itemList={dbMenu.other}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
  </MenuStyled>
);

