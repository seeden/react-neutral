import React from 'react';
import { mount } from 'enzyme';
import { Text } from '../src';

describe('Anchor', () => {
  it('should be able to render', () => {
    const wrapper = mount((
      <Text className="test-class">Test</Text>
    ));

    expect(wrapper.html()).toBe('<span class="test-class">Test</span>');
  });
});
