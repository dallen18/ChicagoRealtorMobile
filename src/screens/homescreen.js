import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import Background from './background';
import { imageAssets } from '../assets/imageAssets';

const Homescreen = () => {
  return (
    <Background style={{}}>
      <Text style={{color: '#A0665B'}}>Welcome to  </Text>
      <View style={styles.item}>
       <Image style={styles.imgBanner} source={imageAssets.icon3} />
      </View>
    </Background>
    
  );
}

const styles = StyleSheet.create({})

export default Homescreen

