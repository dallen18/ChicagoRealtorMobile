import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/searchScreen';
import LandingScreen from '../screens/landingScreen';
import FavoritesScreen from '../screens/favoritesScreen';
import Profile from '../screens/profile';

const tabNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Tab.Screen name='Searchpage' component={SearchScreen} options={{tabBarIcon: ({})}} />

    
          <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="heart-outline" color={color} size={size} />
            ),
          }}
        />
  
  

      <Tab.Screen name='Mainpage' component={LandingScreen} />
      <Tab.Screen name='Favorites' component={Favorites} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
  )
};

export default tabNavigation;