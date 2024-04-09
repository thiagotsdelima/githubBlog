import styled from "styled-components";

export const PostContainer = styled.section`
  width: 100%;
  max-width: 44.25rem;
  margin: 0 auto 14.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: auto auto auto; 
  gap: 1rem;
`;

export const PostContent = styled.div`
background: ${props => props.theme['base-900']};
padding: 2.5rem 0 7.5rem;
header {

}
footer {
  
}
`;
