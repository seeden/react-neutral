import React, { Component } from 'react';

export default class Base extends Component {
  getNode() {
    return this.node;
  }

  handleNode = (node) => {
    this.node = node;
  }

  render() {
    throw new Error('You need to override render method');
  }
}
