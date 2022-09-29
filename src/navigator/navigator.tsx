import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {loginScreen} from '../screen/loginScreen';
import {RegisterScreen} from '../screen/RegisterScreen';
const Stack = createStackNavigator();
export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="login" component={loginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
