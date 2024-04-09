import { styled } from "styled-components"


export const Container = styled.div`
  width: 630px;

  background: ${props => props.theme['input-1500']};

  display: flex;
  align-items: center;

  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 0 12px;
    border: 0;

    color: ${props => props.theme['base-500']};
    background: transparent;
   
    &:placeholder {
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme[' base-700']};
    }
  }

`;