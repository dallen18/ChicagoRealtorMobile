import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/homeScreen';
import SignupScreen from './src/screens/signupScreen';
import LoginScreen from './src/screens/loginScreen';
import LandingScreen from './src/screens/landingScreen';
import ionic from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;