import React from 'react';
import Base from './Base';

export default class Anchor extends Base {
  render() {
    return (
      <a ref={this.handleNode} {...this.props} />
    );
  }
}
