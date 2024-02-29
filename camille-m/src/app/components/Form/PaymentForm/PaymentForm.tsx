import { StyledForm } from '../LoginForm/styles';
import {
  StyledSelect,
  StyledTitle,
  SmallerInfo,
  WrapperInfo,
  StyledInfo,
  WrapperSmallInput,
  SmallInput,
  SeparationBar,
  StyledInput,
} from './styles';
import IconProgress from '../../IconsProgress/IconProgress';
import CreateAccount from '../../Buttons/CreateAccount/CreateAccountButton';
import StillBuying from '../../Buttons/StillBuying/StillBuyingButton';

export default function PaymentForm() {
  return (
    <StyledForm>
      <IconProgress />

      <StyledTitle>
        <h1>Detalhes do pagamento</h1>
        <p>Usar cartão salvo:</p>
        <StyledSelect>
          <option value="opcao1">Fulano de tal, 7741545</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </StyledSelect>

        <SmallerInfo>
          <p>Nome no cartão:</p>
        </SmallerInfo>

        <StyledSelect>
          <option value="opcao1">Ciclano de tal</option>
        </StyledSelect>

        <SmallerInfo>
          <p>Número do cartão</p>
        </SmallerInfo>
        <StyledSelect>
          <option value="opcao1">Rua X, bairro Y</option>
        </StyledSelect>
        <WrapperInfo>
          <StyledInfo>
            <SmallerInfo>
              <p>Expiração</p>
            </SmallerInfo>
            <WrapperSmallInput>
              <SmallInput></SmallInput>
              <SeparationBar>
                <p>/</p>
              </SeparationBar>
              <SmallInput></SmallInput>
            </WrapperSmallInput>
          </StyledInfo>

          <StyledInfo>
            <SmallerInfo>
              <p>CVC</p>
            </SmallerInfo>
            <StyledInput></StyledInput>
          </StyledInfo>
        </WrapperInfo>
      </StyledTitle>
      <CreateAccount />
      <StillBuying />
    </StyledForm>
  );
}
