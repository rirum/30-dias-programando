import { MdKeyboardArrowDown } from 'react-icons/md';
import { PiShoppingCartLight } from 'react-icons/pi';
import {
  StyledHeader,
  StyledLink,
  Menu,
  ProfileAndCart,
  Profile,
  Cart,
  HamburgerMenu,
  StyledLogo,
} from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <Menu>
        <StyledLogo href={'/home'}>
          <h1>codepay.</h1>
        </StyledLogo>

        <StyledLink href={'/home'}>
          <ul>Início</ul>
        </StyledLink>
        <StyledLink href={'/buy'}>
          <ul>Comprar</ul>
        </StyledLink>
        <StyledLink href={'/contact'}>
          <ul>Contato</ul>
        </StyledLink>
        <StyledLink href={'/help'}>
          <ul>Ajuda</ul>
        </StyledLink>
      </Menu>

      <ProfileAndCart>
        <Profile>
          <p>Conta</p>
          <MdKeyboardArrowDown size={'25px'} />
        </Profile>
        <Cart>
          <p>2 Itens</p>
          <PiShoppingCartLight size={'25px'} />
        </Cart>
      </ProfileAndCart>
      <HamburgerMenu />
    </StyledHeader>
  );
}
