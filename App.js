import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store,persistor } from './src/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Login from './src/login/login';
import HomePage from './src/home/home';
import ViewVideo from './src/view-video/view-video';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="ViewVideo" component={ViewVideo} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
