import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ alt, ...rest }) {
  return <img alt={alt} {...rest} />;
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
};
