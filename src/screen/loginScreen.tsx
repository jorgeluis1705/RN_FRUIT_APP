import React from 'react';
import {View, Text, KeyboardAvoidingView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../redux/user/userActions';
export const LoginScreen = () => {
  const store = useSelector((e: any) => e.user);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    console.log(store);
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
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
          <Button
            onPress={handleIncrement}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
