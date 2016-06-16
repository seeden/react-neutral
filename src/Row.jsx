import React, { Component } from 'react';
import View from './View';

export default class Row extends Component {
  static propTypes = {
    ...View.propTypes,
  };

  static defaultProps = {
    className: 'row',
  };

  render() {
    return (
      <View {...this.props} />
    );
  }
}
