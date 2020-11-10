import React from 'react'
import styled from 'styled-components'
import { ToppingWrap, ToppingLabel, ToppingCheck } from '../Style/Label';


export function Choices({ openItem, choice, changeChoices }) {
  return(
    <>
      <h3>Выбирайте: </h3>
      <ToppingWrap>
        {openItem.choices.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheck 
              type='radio'
              name='choices'
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ToppingLabel>
        ))}
      </ToppingWrap>
    </>
  )
}