import styled from 'styled-components';

export const Aside = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-size: 16px;
    margin-left: 5px;
  }
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;
