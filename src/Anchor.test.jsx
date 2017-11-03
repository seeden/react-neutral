import React from 'react';
import { mount } from 'enzyme';
import { Anchor } from '../src';

describe('Anchor', () => {
  it('should be able to render', () => {
    const wrapper = mount((
      <Anchor className="test-class" href="http://www.test.com">Test</Anchor>
    ));

    expect(wrapper.html()).toBe('<a class="test-class" href="http://www.test.com">Test</a>');
  });
});
