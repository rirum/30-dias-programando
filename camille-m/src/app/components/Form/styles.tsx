import styled from 'styled-components';

export const StyledForm = styled.div`
  width: 600px;
  margin-top: 80px;
`;

export const Aside = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;

  p {
    font-size: 18px;
    margin-left: 5px;
  }
`;
export const StyledIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailsAccount = styled.div`
  justify-content: flex-start;
  margin-top: 60px;
  border-bottom: 0.5px solid #b4b6b9;

  h1 {
    font-weight: 600;
    font-size: 20px;
  }
  p {
    font-size: 16px;
    color: rgb(113, 128, 150);
  }
  input {
    width: 600px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #b4b6b9;
    border-radius: 4px;
    background: #f9f9f9;

    ::placeholder {
      font-size: 14px;
    }
  }
`;
