import React from 'react';
import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import {useSelector} from 'react-redux';

export const LoginScreen = () => {
  const store = useSelector((e: any) => e.user);
  console.log({store});
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View>
          <Text
            style={{
              color: 'red',
              fontSize: 50,
            }}>
            {store.counter}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
