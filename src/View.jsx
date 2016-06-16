import React, { Component, PropTypes } from 'react';

export default class View extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  render() {
    const { children, className, style, onClick } = this.props;

    return (
      <div
        className={className}
        style={style}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}
