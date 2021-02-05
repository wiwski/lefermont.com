import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container, ImgWrapper } from './logo.css';

const Logo = ({ logo, title, description }) => (
  <Container>
    <div>
      <h1 className="title">{title}</h1>
      <h3 className="description">{description}</h3>
    </div>
    <ImgWrapper>
      <Img fluid={logo.childImageSharp.fluid} alt="Logo" className="logo" />
    </ImgWrapper>
  </Container>
);

Logo.propTypes = {
  logo: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Logo;
