import { StyledForm, DetailsAccount } from './styles';
import CreateAccount from '../../Buttons/CreateAccount/CreateAccountButton';
import StillBuying from '../../Buttons/StillBuying/StillBuyingButton';
import IconProgress from '../../IconsProgress/IconProgress';
export default function LoginForm() {
  return (
    <StyledForm>
      <IconProgress />

      <DetailsAccount>
        <h1>Detalhes da conta</h1>

        <form>
          <p>Email</p>
          <input placeholder="e-mail"></input>
          <p>Senha</p>
          <input placeholder="password"></input>
        </form>

        <CreateAccount />
      </DetailsAccount>

      <StillBuying />
    </StyledForm>
  );
}
