import React, { Component, PropTypes } from 'react';

export default class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    return (
      <span className={className}>
        {children}
      </span>
    );
  }
}
