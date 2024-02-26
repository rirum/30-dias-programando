import { GoPerson } from 'react-icons/go';
import { BsBoxSeam } from 'react-icons/bs';
import { LuWallet } from 'react-icons/lu';

import { StyledIcons, Aside } from './styles';
export default function IconProgress() {
  return (
    <>
      <Aside>
        <StyledIcons>
          <GoPerson />
          <p>Conta</p>
        </StyledIcons>

        <p> - </p>

        <StyledIcons>
          <BsBoxSeam />
          <p>Envio</p>
        </StyledIcons>

        <p> - </p>

        <StyledIcons>
          <LuWallet />
          <p>Pagamento</p>
        </StyledIcons>
      </Aside>
    </>
  );
}
