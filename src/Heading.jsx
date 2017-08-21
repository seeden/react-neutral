import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ level, ...rest }) {
  const Tag = `h${level}`;

  return <Tag {...rest} />;
}

Heading.propTypes = {
  level: PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
};
