import React, { Component } from 'react';
import View from './View';

export default class Container extends Component {
  static propTypes = {
    ...View.propTypes,
  };

  static defaultProps = {
    className: 'container',
  };

  render() {
    return (
      <View {...this.props} />
    );
  }
}
