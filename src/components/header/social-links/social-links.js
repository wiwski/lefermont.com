import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from './social-links.css';

const SocialLinks = ({ links: { facebook, instagram } }) => (
  <StaticQuery
    query={graphql`
      query {
        facebookLogo: file(relativePath: { eq: "icons/facebook.webp" }) {
          childImageSharp {
            fixed(width: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        instagramLogo: file(relativePath: { eq: "icons/instagram.webp" }) {
          childImageSharp {
            fixed(width: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={({ instagramLogo, facebookLogo }) => {
      return (
        <Container>
          <a href={facebook} target="_blank" rel="noreferrer">
            <Img
              alt="Facebook logo"
              fixed={facebookLogo.childImageSharp.fixed}
            />
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            <Img
              alt="Instagram logo"
              fixed={instagramLogo.childImageSharp.fixed}
            />
          </a>
        </Container>
      );
    }}
  />
);

SocialLinks.propTypes = {
  links: PropTypes.shape({
    facebook: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
  }),
};

export default SocialLinks;
