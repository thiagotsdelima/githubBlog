import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from '../../assets/Logo.svg'
import leftSide from '../../assets/leftSide.svg'
import rightSide from '../../assets/rightSide.svg'

export function Header() {
  return (
<HeaderContainer>
  <HeaderContent>
    <img src={leftSide} alt="" />
    <img src={logoImg} alt="" />
    <img src={rightSide} alt="" />
  </HeaderContent>
</HeaderContainer>
  )
}