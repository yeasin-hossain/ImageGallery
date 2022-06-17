import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@app/Home';
import Gallery from '@app/Gallery';
import {appUrls} from '@utility//appUrls';
import {hasWaitePermission} from '@utility//waitePermission';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    hasWaitePermission();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={appUrls.home}
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={appUrls.gallery}
            component={Gallery}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
