import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Theme from "../../assets/styles/Theme";
import { FontAwesome5 } from "@expo/vector-icons";

type ButtonMenuProps = {
  text: string;
  iconName:string;
};
export default function ButtonMenu({ text, iconName }: ButtonMenuProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <FontAwesome5 name={iconName} size={50} color={Theme.primary} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.square,
    width: 105,
    height: 105,
    borderRadius: 5,
    marginTop: "7%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Theme.primary,
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    marginTop:10
  },
});
