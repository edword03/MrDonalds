import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrder';


function App() {

  const openItem = useOpenItem();
  const orders = useOrder();

  console.log(openItem, orders);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} /> }
    </>
  );
}

export default App;
