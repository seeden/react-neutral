import React from 'react';
import PropTypes from 'prop-types';
import Base from './Base';

export default class Heading extends Base {
  static propTypes = {
    level: PropTypes.number,
  };
  
  static defaultProps = {
    level: 1,
  };

  render() {
    const { level } = this.props;
    const Tag = `h${level}`;

    return (
      <Tag ref={this.handleNode} {...this.props} />
    );
  }
}
