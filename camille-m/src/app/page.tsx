'use client';

import styled from 'styled-components';
import Header from './components/Header/Header';
import LoginForm from './components/Form/LoginForm/LoginForm';
import Order from './components/Order/Order';
import AddressForm from './components/Form/AddressForm/AddressForm';
import PaymentForm from './components/Form/PaymentForm/PaymentForm';

export default function Home() {
  return (
    <>
      <Header />
      <Background>
        {/* <LoginForm></LoginForm> */}
        {/* <AddressForm></AddressForm> */}
        <PaymentForm></PaymentForm>
        <Order></Order>
      </Background>
    </>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
