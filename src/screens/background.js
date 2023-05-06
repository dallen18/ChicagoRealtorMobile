import React from 'react';
import { View, ImageBackground } from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("../assets/homeBG.jpeg")} style={{bottom: 0, height: '90%', top: 320, borderTopLeftRadius: 130, width: 450, overflow: 'hidden'}}/>
      <View style={{position: 'absolute'}}>
        {children}
      </View>
    </View>
  );
}

export default Background;