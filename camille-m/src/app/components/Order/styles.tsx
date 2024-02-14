import styled from 'styled-components';

export const StyledOrder = styled.div`
  width: 600px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  h1 {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const ProductImage = styled.div`
  margin-top: 20px;
  h2 {
    font-weight: 500;
    font-size: 20px;
  }
  p {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const WrapperProductValueAndQuantity = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  button {
    width: 40px;
    height: 40px;
    background-color: #f9f9f9;
    border: 1px solid #f3efef;
    border-radius: 2px;
    color: #718096;
    font-size: 30px;
  }
  p {
    font-size: 16px;
  }
`;

export const WrapperCoupon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  input {
    width: 350px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 2px solid #f3efef;
    background-color: #f9f9f9;
    &::placeholder {
      font-weight: 600;
      padding: 5px;
    }
  }
  button {
    width: 102px;
    height: 60px;
    background-color: white;
    border: 2px solid #2fbd6a;
    border-radius: 4px;
    color: #2fbd6a;
    font-weight: 600;
  }
`;

export const OrderTax = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-weight: 500;
    font-size: 18px;
    color: #4a5568;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: #2d3748;
  }
`;

export const OrderShipping = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-weight: 500;
    font-size: 18px;
    color: #4a5568;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: #2fbd6a;
  }
`;

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 600;
    font-size: 20px;
    color: #2d3748;
  }
`;
