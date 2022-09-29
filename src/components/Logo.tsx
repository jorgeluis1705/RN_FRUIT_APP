import React from 'react';
import {Image, View} from 'react-native';

export const Logo = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/manzana.png')}
        style={{
          width: 150,
          height: 140,
        }}
      />
    </View>
  );
};
