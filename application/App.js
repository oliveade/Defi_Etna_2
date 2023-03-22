import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import PedagogieScreen from './src/screens/PedagogieScreen';
import EmployScreen from './src/screens/EmployScreen';
import EmargementQRScreen from './src/screens/EmargementQRScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              
              <Stack.Screen name= "Home" component = {HomeScreen} />
              <Stack.Screen name= "Login" component = {LoginScreen} />
              <Stack.Screen name= "Pedagogie" component = {PedagogieScreen} />
              <Stack.Screen name= "Admin" component = {EmployScreen} />
            
          </Stack.Navigator>
      </NavigationContainer>
  );
}

