import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Button from '../buttonDesign';
import {primaryColor, secondaryColor} from '../constants';
import Input from './input';

const Login = (props) => {
  return (
    
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: secondaryColor, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Input
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Input placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: primaryColor, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Button textColor='white' bgColor={secondaryColor} buttonLabel="Login" Press={() => alert("Logged In")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: primaryColor, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Landing")}>
            <Text style={{ color: secondaryColor, fontWeight: 'bold', fontSize: 16 }}>temp landingscreen button</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

export default Login;