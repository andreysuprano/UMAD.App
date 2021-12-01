import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Theme from "../../assets/styles/Theme";

type ButtonProps = {
  text:string
}
export default function Button({text}:ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>{<Text style={styles.buttonText}>{text}</Text>}</TouchableOpacity>
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
},
buttonText: {
    color: Theme.square,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
}
});
