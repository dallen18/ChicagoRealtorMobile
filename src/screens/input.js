import React from 'react';
import {TextInput} from 'react-native';
import {primaryColor} from '../constants';

const Input = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: primaryColor, paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={primaryColor}>
    </TextInput>
  );
}

export default Input;