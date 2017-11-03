import React from 'react';
import Base from './Base';

export default class View extends Base {
  render() {
    return (
      <div ref={this.handleNode} {...this.props} />
    );
  }
}
