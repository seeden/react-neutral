import React from 'react';
import { mount } from 'enzyme';
import { View } from '../src';

describe('Anchor', () => {
  it('should be able to render', () => {
    const wrapper = mount((
      <View className="test-class">Test</View>
    ));

    expect(wrapper.html()).toBe('<div class="test-class">Test</div>');
  });
});
