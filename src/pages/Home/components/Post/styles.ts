import styled from "styled-components";

export const PostContainer = styled.section`
  
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: auto auto auto; 
`;

export const PostContent = styled.div`
padding: 1.25rem 2rem;
background: ${props => props.theme['gray-700']};
background: ${props => props.theme['base-900']};
padding: 2.5rem;
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  h2 {
    width: 263px;
    height: 64px;
    font-size: 20px;
    font-weight: bold;
    line-height: 160%;
    color: ${props => props.theme['gray-300']};
  }
  span {
    margin-top: .4rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
    color: ${props => props.theme['base-300']};
  }
}
footer {
  width: 338px;
  height: 112px;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    color: ${props => props.theme['gray-500']};
  }
  .post-body {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 6.8em; 
}

}

&:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
&:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
`;
