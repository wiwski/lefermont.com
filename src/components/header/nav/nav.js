import React, { useState } from 'react';
import NavResizeHandler from './nav-resize-handler';
import {
  Container,
  ContainerDesktop,
  ContainerTouch,
  HamburgerButton,
  LinkDesktop,
  LinkMobile,
  NavigationTouch,
} from './nav.css';

const Nav = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const toggleHamburgerMenu = active => {
    setIsHamburgerActive(active);
    document.querySelector('body').style.overflowY = active ? 'hidden' : 'auto';
  };
  return (
    <Container>
      <NavResizeHandler>
        <ContainerDesktop>
          <ul>
            <LinkDesktop to="/">home</LinkDesktop>
            <LinkDesktop to="/a-propos">à propos</LinkDesktop>
            <LinkDesktop to="/presations">prestations</LinkDesktop>
            <LinkDesktop to="/galerie">galerie</LinkDesktop>
            <LinkDesktop to="/a-emporter">vente à emporter</LinkDesktop>
          </ul>
        </ContainerDesktop>
        <ContainerTouch>
          <HamburgerButton
            className={`hamburger hamburger--squeeze ${isHamburgerActive &&
              'is-active'}`}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            aria-expanded={isHamburgerActive ? 'true' : 'false'}
            onClick={() => toggleHamburgerMenu(!isHamburgerActive)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </HamburgerButton>
          {isHamburgerActive && (
            <NavigationTouch id="navigation">
              <LinkMobile to="/">home</LinkMobile>
              <LinkMobile to="/a-propos">à propos</LinkMobile>
              <LinkMobile to="/presations">prestations</LinkMobile>
              <LinkMobile to="/galerie">galerie</LinkMobile>
              <LinkMobile to="/a-emporter">vente à emporter</LinkMobile>
            </NavigationTouch>
          )}
        </ContainerTouch>
      </NavResizeHandler>
    </Container>
  );
};

export default Nav;
