import styled from 'styled-components'


export const SidebarContainer = styled.header`
max-width: 864px;
max-height: 168px;
margin: -6rem auto;
padding: 2.5rem 3rem 3rem;
border-radius: 10px;
background: ${props => props.theme['base-900']};
header {
 display: flex;
 justify-content: space-between;
 margin-bottom: 1rem;
  a {
    display: flex;
    align-items: center;
    font-size: .8rem;
    font-weight: 700;
    color: ${props => props.theme['gray-100']};
    strong {
      margin-left: .5rem;
    }
  }
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme['gray-300']};
}
footer {
    margin-left: .5rem;
    display: flex;
    flex-direction: row; 
    gap: 16px; 
    align-items: center; 
    flex-wrap: wrap; 
    margin-top: .5rem;
    font-weight: 400;
    color: ${props => props.theme['base-300']};
}
footer span {
    display: flex;
    align-items: center; 
    font-size: 1rem;
    strong {
      margin-left: 8px; 
    }
  }

`;

