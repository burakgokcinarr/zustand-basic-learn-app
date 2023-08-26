import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteNavigation from './src/navigation/RouteNavigation';

function App() {
  return (
    <NavigationContainer>
      <RouteNavigation/>
    </NavigationContainer>
  );
}

export default App;