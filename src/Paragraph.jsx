import React from 'react';
import Base from './Base';

export default class Paragraph extends Base {
  render() {
    return (
      <p ref={this.handleNode} {...this.props} />
    );
  }
}
