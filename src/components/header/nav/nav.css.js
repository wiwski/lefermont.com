import styled from 'styled-components';
import Link from 'components/link';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    & + a {
      margin-left: 2rem;
    }
  }
`;

export const ContainerDesktop = styled.div`
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const ContainerTouch = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    display: block;
    font-size: 2rem;
  }
`;

export const LinkStyled = styled(Link)`
  text-transform: lowercase;
`;

export const LinkDesktop = styled(LinkStyled)`
  margin: 0 13px;
  padding: 0 10px;
`;

export const LinkMobile = styled(LinkStyled)`
  margin: 0 auto;
  margin-bottom: 48px;
  padding: 8px;
  width: fit-content;
`;

export const NavigationTouch = styled.div`
  padding-top: 100px;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  top: 0;
  left: 0;
  text-align: center;

  a {
    display: block;
  }
`;

export const HamburgerButton = styled.button`
  position: relative;
  z-index: 2;
`;
