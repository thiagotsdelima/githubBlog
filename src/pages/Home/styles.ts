import styled from 'styled-components';

export const HomeContainer = styled.div`
`;

export const Wrapper = styled.div`
  max-width: 1267px;
  width: 100%;
  height: 88.31rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const TransactionsContainer = styled.div`
  max-width: 914px;
  max-height: 844px;
  gap: 2rem 2rem; 
  display: grid;
  grid-template-columns: repeat(2, 1fr);  
  margin: 3rem auto 0;
  padding: 0 1.5rem;
  
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem; 
  width: 100%;
  section {
    margin-bottom: 1rem;
    width: 54rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      font-size: 18px;
      font-weight: 700;
      color: ${props => props.theme['gray-400']};
    }
    span {
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme['base-300']};
    }
  }
`;
