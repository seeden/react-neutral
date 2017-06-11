# react-neutral
Universal react components working on the web and react-native.

# Web components

```js
import React from 'react';
import View, { Text, Image, Anchor } from 'react-native';

return default () => (
  <View>
    <Image src="/profile/zlatko/picture" />
    <Text>Hello, </Text>
    <Anchor href="/profile/zlatko">Zlatko</Anchor>
  </View>
);
```
