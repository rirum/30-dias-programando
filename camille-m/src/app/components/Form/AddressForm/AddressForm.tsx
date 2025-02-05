import { StyledForm } from '../LoginForm/styles';
import {
  StyledTitle,
  StyledSelect,
  SmallerInfo,
  WrapperInfo,
  StyledInfo,
  StyledInput,
  SmallSelect,
} from './styles';
import IconProgress from '../../IconsProgress/IconProgress';
import CreateAccount from '../../Buttons/CreateAccount/CreateAccountButton';
import StillBuying from '../../Buttons/StillBuying/StillBuyingButton';

export default function AddressForm() {
  return (
    <StyledForm>
      <IconProgress />

      <StyledTitle>
        <h1>Detalhes do envio</h1>
        <p>Usar o endereço salvo:</p>
        <StyledSelect>
          <option value="opcao1">Endereço 01, numero 01</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </StyledSelect>

        <SmallerInfo>
          <p>Cidade:</p>
        </SmallerInfo>

        <StyledSelect>
          <option value="opcao1">São Paulo</option>
        </StyledSelect>

        <SmallerInfo>
          <p>Rua, bairro</p>
        </SmallerInfo>
        <StyledSelect>
          <option value="opcao1">Rua X, bairro Y</option>
        </StyledSelect>
        <WrapperInfo>
          <StyledInfo>
            <SmallerInfo>
              <p>Número</p>
            </SmallerInfo>
            <StyledInput></StyledInput>
          </StyledInfo>

          <StyledInfo>
            <SmallerInfo>
              <p>Estado</p>
            </SmallerInfo>
            <SmallSelect>
              <option value="opcao1">São Paulo</option>
            </SmallSelect>
          </StyledInfo>
        </WrapperInfo>
      </StyledTitle>
      <CreateAccount />
      <StillBuying />
    </StyledForm>
  );
}
