/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/navigator/navigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
