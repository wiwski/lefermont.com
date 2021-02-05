import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '@fontsource/roboto/100.css';
import '@fontsource/rozha-one';

import JSONData from '../../../content/layout/layout.json';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

import '../../styles/scss/main.scss';

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header
      title={data.site.siteMetadata.siteTitleShort}
      description={data.site.siteMetadata.siteDescriptionShort}
      logo={data.logo}
      socialLinks={JSONData.socialLinks}
    />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitleShort
            siteDescriptionShort
          }
        }
        logo: file(relativePath: { eq: "logo.webp" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
