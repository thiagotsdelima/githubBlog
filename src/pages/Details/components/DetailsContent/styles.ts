import styled, { css } from "styled-components";

const textMedium = css`
  font-size: 1rem;
  color: ${props => props.theme['gray-500']};
`;

export const ArticleContainer = styled.main`
  overflow: hidden;
  padding: 2.5rem 2rem;
  margin-top: 7rem;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;

    &:first-child {
      margin-top: 0;
    }
  }

  hr, p {
    margin-bottom: 1rem;
  }

  p {
    ${textMedium}
  }

  strong {
    ${textMedium}
    font-weight: 700;
  }

  a {
    ${textMedium}
    color: ${props => props.theme['gray-100']};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  ul {
    margin-left: 2rem;
  }
`;
