import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;

  h1,
  h3 {
    text-transform: lowercase;
    text-align: right;
    white-space: nowrap;
  }
  h1 {
    font-size: 3rem;
    font-family: rozha one, serif;
    margin-bottom: 0.7rem;
  }
  h3 {
    font-weight: normal;
    font-size: 1.8rem;
  }

  .logo {
    width: 90px;
  }
`;

export const ImgWrapper = styled.div`
  width: 110px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1032px) {
    display: none;
  }
`;
