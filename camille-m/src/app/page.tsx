'use client'

import styled from "styled-components";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Order from "./components/Order/Order";


export default function Home() {
  return (
    <>
    <Header/>
   <Background>
    
    <Form></Form>
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
`
