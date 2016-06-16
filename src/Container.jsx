import React, { Component, PropTypes } from 'react';
import View from './View';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: 'container',
  };

  render() {
    const { children, className, style } = this.props;

    return (
      <View className={className} style={style}>
        {children}
      </View>
    );
  }
}
