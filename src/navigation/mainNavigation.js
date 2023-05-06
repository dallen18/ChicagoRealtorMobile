import { View, Text } from 'react-native'
import React from 'react'

const mainNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Mainpage' component={LandingScreen} />
      <Tab.Screen name='Mainpage' component={LandingScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default mainNavigation