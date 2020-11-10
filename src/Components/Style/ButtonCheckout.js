import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    font-size: inherit;
    font-family: inherit;
    background-color: #299B01;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        background-color: #fff;
        color: #299B01;
        border: 1px solid #299B01;
    }
    &:disabled {
      color: #bbb;
      background-color: #ccc;
      border: 1px solid #aaa;
    }
`;

