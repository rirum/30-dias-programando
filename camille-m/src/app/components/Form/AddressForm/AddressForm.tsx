import { StyledForm } from '../LoginForm/styles';
import styled from 'styled-components';
import IconProgress from '../../IconsProgress/IconProgress';
import CreateAccount from '../../Buttons/CreateAccount/CreateAccountButton';
import StillBuying from '../../Buttons/StillBuying/StillBuyingButton';

export default function AddressForm() {
  return (
    <>
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
    </>
  );
}

const StyledTitle = styled.div`
  h1 {
    font-size: 20px;
    margin-bottom: 48px;
  }
  p {
    font-size: 14px;
  }
`;

const StyledSelect = styled.select`
  width: 600px;
  height: 60px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #f3efef;
  font-size: 14px;
  color: #2d3748;
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;
`;

const SmallerInfo = styled.div`
  p {
    font-size: 12px;
    color: #718096;
  }
`;

const WrapperInfo = styled.div`
  display: flex;
  width: 600px;
  margin-right: 10px;
`;
const StyledInfo = styled.div`
  width: 300px;
  margin-right: 32px;
`;

const SmallSelect = styled.select`
  width: 275px;
  height: 60px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #f3efef;
  font-size: 14px;
  color: #2d3748;
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;
`;
const StyledInput = styled.input`
  width: 275px;
  height: 60px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #f3efef;
  font-size: 14px;
  color: #2d3748;
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;
`;
