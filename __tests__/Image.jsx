import React from 'react';
import { mount } from 'enzyme';
import { Image } from '../src';

describe('Anchor', () => {
  it('should be able to render', () => {
    const wrapper = mount((
      <Image className="test-class" src="http://www.google.com/image.jpg" />
   ));

    expect(wrapper.html()).toBe('<img class="test-class" src="http://www.google.com/image.jpg">');
  });
});
