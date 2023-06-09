import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import Background from './background';
import { imageAssets } from '../assets/imageAssets';
import { primaryColor, secondaryColor} from '../constants';
import Button from '../buttonDesign';

const Homescreen = (props) => {
  return (
    <Background style={{}}>
      <Text style={secondaryColor}>Welcome to chicago app </Text>
      <View style={styles.item}>
       <Image style={styles.imgIcon} source={imageAssets.icon2} />
       <Image  style={{zIndex: 999}} source={imageAssets.compIcon2} />
       <Button bgColor={primaryColor} textColor='white' buttonLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Button bgColor='white' textColor={primaryColor} buttonLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
    
  );
}

const styles = StyleSheet.create({image: {
  flex: 1,
  aspectRatio: 1.5, 
  resizeMode: 'contain',

}})

export default Homescreen

