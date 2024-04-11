import React from 'react';
import { Container } from "./styles";


export const Input = React.forwardRef((props, ref) => {
  return (
    <Container id="inputs">
      <input ref={ref} {...props} />
    </Container>
  );
});





