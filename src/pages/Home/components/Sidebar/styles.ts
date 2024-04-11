import styled from 'styled-components'


export const SidebarContainer = styled.section`
width: 54rem;
margin: -6rem auto;
padding: 2.5rem 3rem 3rem;
border-radius: 10px;
background: ${props => props.theme['base-900']};
height: 13.75rem;
display: flex;
justify-content: space-between;
align-items: flex-start;

.imgContainer img {
  width: 33%;
  height: 300%;
  object-fit: cover;
  border-radius: 8px;
}

`;

export const SidebarContent = styled.div`
width: 624px;
margin-left: -17rem;
header {
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: bold;
    margin-bottom: .5rem;
  }
  a {
    font-weight: bold;
    font-size: .75rem;
  }
}
main {
  p {
    font-size: 16px;
    color: ${props => props.theme['gray-500']};
    margin-bottom: 2.5rem;
  }
}
footer {
    display: flex;
    flex-direction: row; 
    gap: 16px; 
    align-items: center; 
    flex-wrap: wrap; 
  }

  footer span {
    display: flex;
    align-items: center; 
    color: ${props => props.theme['gray-400']};

    strong {
      margin-left: 8px; 
    }
  }
`;