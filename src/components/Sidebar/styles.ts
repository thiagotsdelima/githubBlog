import styled from 'styled-components'


export const SidebarContainer = styled.section`
width: 54rem;
margin: -6rem auto;
padding: 2.5rem 1.5rem 3rem;
border-radius: 10px;
background: ${props => props.theme['base-900']};
height: 13.75rem;
display: flex;
justify-content: space-between;
align-items: flex-start;

.imgContainer {
  height: 148px;
  width: 148px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  }

`;

export const SidebarContent = styled.div`
width: 624px;
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
  align-items: center;
  color: ${props => props.theme['gray-400']};
}
footer span{
  font-size: 1rem;
  margin-right: 1.5rem;
  line-height: 160%;
  svg {
    align-items: center;
  }
}
`;