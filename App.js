import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/login/login';
import HomePage from './src/home/home';
import ViewVideo from './src/view-video/view-video';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ViewVideo" component={ViewVideo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
