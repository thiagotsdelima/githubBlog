import styled from 'styled-components'

export const HeaderContainer = styled.header`
background: ${props => props.theme['base-1100']};
padding: 2.5rem 0 7.5rem;
height: 18.5rem;
`;

export const HeaderContent = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
justify-content: space-between;
`;