import { styled } from "styled-components"


export const Container = styled.div`
  width: 54rem;

  background: ${props => props.theme['input-1500']};

  > input {
    height: 3.5rem;
    width: 100%;
    border: transparent;
    padding: 0 12px;
    border-radius: 6px;

    color: ${props => props.theme['base-500']};
    background: transparent;
   
    &::placeholder {
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme['gray-100']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }

`;