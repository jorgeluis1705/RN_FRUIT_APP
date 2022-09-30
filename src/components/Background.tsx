import React from 'react';
import {View} from 'react-native';

export const Background: React.FC<{top?: number}> = ({top = -250}) => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#5856D6',
        top,
        width: 1000,
        height: 1200,
        transform: [{rotate: '-70deg'}],
      }}
    />
  );
};
