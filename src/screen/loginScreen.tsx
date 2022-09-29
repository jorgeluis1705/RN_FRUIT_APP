import React from 'react';
import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';

export const loginScreen = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={
          Platform.OS === 'ios' ? 'padding' : 'height'
        }></KeyboardAvoidingView>
    </>
  );
};
