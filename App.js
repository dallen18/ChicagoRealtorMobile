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
import { View } from 'react-native';




{/* <View>
  <Svg width={120} height={40} fill={"any color"} />
</View> */}
// const styles = {
  
//   logo: {
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#efefef',
//   },
//   scrollView: {
//     width: '100%',
//   },
//   containerStyles: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// };

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