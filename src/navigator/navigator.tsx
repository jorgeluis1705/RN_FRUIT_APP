import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginComponent} from '../components/login/LoginComponent';
const Stack = createStackNavigator();
export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginComponent} />
    </Stack.Navigator>
  );
};
