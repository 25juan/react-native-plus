import * as React from 'react';
import Main from "./src/Main";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatList from "./src/FlatList";
const Stack = createStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ title: '首页' }}/>
        <Stack.Screen name="FlatList" component={FlatList} options={{ title: 'FlatList' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
