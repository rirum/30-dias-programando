import Image from 'next/image';
import {
  StyledOrder,
  ProductImage,
  WrapperProductValueAndQuantity,
  Quantity,
  WrapperCoupon,
  OrderTax,
  OrderShipping,
  TotalValue,
} from './styles';

export default function Order() {
  return (
    <StyledOrder>
      <h1>Resumo do pedido</h1>
      <ProductImage>
        <Image
          src="/assets/mouse.png"
          width="484"
          height="150"
          alt="mouse"
        ></Image>
        <h2>Mouse Gamer Redragon</h2>
        <WrapperProductValueAndQuantity>
          <p>R$ 15,22</p>

          <Quantity>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </Quantity>
        </WrapperProductValueAndQuantity>
        <WrapperCoupon>
          <input placeholder="Cupom de desconto"></input>
          <button>Aplicar</button>
        </WrapperCoupon>

        <OrderTax>
          <h3>Taxa:</h3>
          <p>R$ 3,42</p>
        </OrderTax>

        <OrderShipping>
          <h3>Envio:</h3>
          <p>Grátis</p>
        </OrderShipping>
        <TotalValue>
          <p>Total:</p>
          <p>R$ 99,99</p>
        </TotalValue>
      </ProductImage>
    </StyledOrder>
  );
}
