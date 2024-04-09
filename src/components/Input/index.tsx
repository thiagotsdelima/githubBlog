import { Container } from "./styles"


export function Input({ ...rest }) {

  return(
    <Container id="inputs">
      <input {...rest} />
    </Container>
  )
}