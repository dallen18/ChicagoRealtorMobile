import React from "react";
import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor} from "../constants";

const standardFlex = StyleSheet.create({
    top: {
        flexDirection: "column",
        flex: 1,
        //backgroundColor: white,
        width: '100%' 
    },
    middleTop: {
        flex: 2.5,
       // backgroundColor: white,
        alignContent: center,
        width: '100%'
    },
    middleBottom: {
        flex: 2.5,
      //  backgroundColor: white,
        alignContent: center,
        width: '100%'
    },
    bottom: {
        flex: 1,
        backgroundColor: secondaryColor,
        position: absolute
    }

    });

const tabNavigation = StyleSheet.create({

});

const buttonStyle = StyleSheet.create({
    button: {
        backgroundColor: "#c0c0c0",
        borderRadius: 15.0,
        borderWidth: 2
    }
});

const textStyle = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});



export {buttonStyle, textStyle, tabNavigation, standardFlex};
