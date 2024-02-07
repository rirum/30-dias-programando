import { GoPerson } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { StyledForm, Aside, StyledIcons, DetailsAccount, StyledButtonAccount, StyledButtonStillBuying } from "./styles";
export default function Form(){
return(
    <StyledForm>
            
        <Aside>
            <StyledIcons>
            <GoPerson/>
            <p>Conta</p>
            </StyledIcons>
          
            <p> - </p>

            <StyledIcons>
            <BsBoxSeam/>
            <p>Envio</p>
            </StyledIcons>

            <p> - </p>

            <StyledIcons>
            <LuWallet/>
            <p>Pagamento</p>
            </StyledIcons>
         </Aside>

        <DetailsAccount>
            <h1>Detalhes da conta</h1>

            <form>
                <p>Email</p>
                <input placeholder="e-mail"></input>
                <p>Senha</p>
                <input placeholder="password"></input>
            </form>

            <StyledButtonAccount>
                <p>Registre-se para conta</p>
                <button>Entrar</button>
            </StyledButtonAccount>
        </DetailsAccount>

        
        
        <StyledButtonStillBuying>
                 <p>Cancelar pedido</p>
                <button>Continuar comprando</button>
        </StyledButtonStillBuying>

    </StyledForm>
)
}

