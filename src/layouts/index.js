import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

import Header from '../components/Header';

import './index.css';

const TemplateWrapper = ({ children, data, ...props }) => (
  <div>
  <Helmet
    title="Optus Shop"
    meta={[
      {
        name: 'description',
        content: 'Optus Shop',
      },
      { name: 'keywords', content: 'mobile' },
      { name: 'msapplication-TileColor', content: '#08AEEA' },
      { name: 'theme-color', content: '#2AF598' },
    ]}>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={withPrefix('/favicons/apple-touch-icon.png')}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={withPrefix('/favicons/favicon-32x32.png')}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={withPrefix('/favicons/favicon-16x16.png')}
    />
  </Helmet>
  <Header
    title="Optus Shop"
  />
  {children}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TemplateWrapper;
