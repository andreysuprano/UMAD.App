import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Theme from "../../assets/styles/Theme";
import { FontAwesome5 } from "@expo/vector-icons";

type ButtonMenuProps = {
  text: string;
  iconName: string;
};
export default function ButtonMenu({ text, iconName }: ButtonMenuProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
      <FontAwesome5 name={iconName} size={50} color={Theme.primary} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.square,
    marginRight:10,
    width: 105,
    height: 105,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.07,
    // shadowRadius: 4.65,

    // elevation: 6,
  },
  buttonText: {
    color: Theme.primary,
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    marginTop: 10
  },
});
