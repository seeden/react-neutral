import React from 'react';
import Base from './Base';

export default class Text extends Base {
  render() {
    return (
      <span ref={this.handleNode} {...this.props} />
    );
  }
}
