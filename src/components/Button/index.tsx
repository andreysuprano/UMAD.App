import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Theme from "../../assets/styles/Theme";

type ButtonProps = {
  text:string,
  onClick:any
}
export default function Button({text, onClick}:ButtonProps) {

  const handleOnPress = () => {
    onClick();
  }
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleOnPress}>{<Text style={styles.buttonText}>{text}</Text>}</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.primary,
    height: 60,
    borderRadius: 5,
    marginTop: "7%",
    alignItems: "center",
    justifyContent: "center",
    zIndex:999
},
buttonText: {
    color: Theme.square,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
}
});
