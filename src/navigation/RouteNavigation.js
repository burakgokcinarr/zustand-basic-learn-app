import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Second } from '../screens';

const Stack = createNativeStackNavigator();

function RouteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="second" component={Second} />
    </Stack.Navigator>
  );
}

export default RouteNavigation;