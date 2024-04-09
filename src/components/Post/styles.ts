import styled from "styled-components";

export const PostContainer = styled.section`
  
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: auto auto auto; 
`;

export const PostContent = styled.div`
background: ${props => props.theme['base-900']};
padding: 2.5rem;
header {

}
footer {
  
}
`;
