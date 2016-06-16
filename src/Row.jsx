import React, { Component, PropTypes } from 'react';
import View from './View';

export default class Row extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: 'row',
  };

  render() {
    const { children, style } = this.props;

    return (
      <View className={style.root} style={style}>
        {children}
      </View>
    );
  }
}
