import React from 'react'
import { ToppingWrap, ToppingLabel, ToppingCheck } from '../Style/Label';

export function Toppings ({ toppings, checkToppings }) {
  return(
    <>
      <h3>Добавки</h3>
      <ToppingWrap>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheck 
              type='checkbox'
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            {item.name}
          </ToppingLabel>
        ))}
    </ToppingWrap>
    </>
  )
}