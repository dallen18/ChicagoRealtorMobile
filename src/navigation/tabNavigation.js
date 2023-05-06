import { View, Text } from 'react-native'
import React from 'react'

const tabNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Mainpage' component={SearchScreen} />
      <Tab.Screen name='Mainpage' component={LandingScreen} />
      <Tab.Screen name='Mainpage' component={Favorites} />
      <Tab.Screen name='Mainpage' component={LandingScreen} />
      <Tab.Screen name='Mainpage' component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default tabNavigation