import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ICity} from '../models/city.model';
import {CityDetailsScreen} from '../screen/CityDetailsScreen';
import {HomeScreen} from '../screen/HomeScreen';
import {LoginScreen} from '../screen/loginScreen';
import {RegisterScreen} from '../screen/RegisterScreen';
import {TransferScreen} from '../screen/TransferScreen';

const Stack = createStackNavigator();
export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="cityDetails" component={CityDetailsScreen} />
      <Stack.Screen name="transfer" component={TransferScreen} />
    </Stack.Navigator>
  );
};
