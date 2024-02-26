import styled from 'styled-components';

export const StyledForm = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const DetailsAccount = styled.div`
  justify-content: flex-start;
  margin-top: 30px;
  border-bottom: 0.5px solid #b4b6b9;

  h1 {
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: rgb(113, 128, 150);
  }
  input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #b4b6b9;
    border-radius: 4px;
    background: #f9f9f9;

    ::placeholder {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;
