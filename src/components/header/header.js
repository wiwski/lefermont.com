import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import {
  Container,
  LeftSideNav,
  NavStyled,
  SocialLinksWrapperDesktop,
  SocialLinksWrapperPhone,
} from './header.css';
import Link from 'components/link';
import Logo from 'components/header/logo';
import SocialLinks from 'components/header/social-links';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, description, logo, socialLinks }) => (
  <AnimatedContainer>
    <Container>
      <LeftSideNav>
        <SocialLinksWrapperDesktop>
          <SocialLinks links={socialLinks} />
        </SocialLinksWrapperDesktop>
        <NavStyled />
      </LeftSideNav>
      <div>
        <Link to="/">
          <Logo logo={logo} title={title} description={description} />
        </Link>
        <SocialLinksWrapperPhone>
          <SocialLinks links={socialLinks} />
        </SocialLinksWrapperPhone>
      </div>
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.shape({}).isRequired,
  socialLinks: PropTypes.shape({}).isRequired,
};

export default Header;
