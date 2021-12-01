import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import Theme from "../../assets/styles/Theme";

type InputProps = {
  placeholder: string;
};
export default function InputOnFocus({ placeholder,...copy}: InputProps) {
  const [active, setActive] = useState(false);
  function handleFocus() {
    setActive(true);
  }
  function handleBlur() {
    setActive(false);
  }
  return (
    <TextInput
      style={{
        borderColor: active ? Theme.primary : Theme.light,
        minWidth: "90%",
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 16,
        height: 60,
        padding: 15,
        marginBottom: 25,
      }}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...copy}
    />
  );
}

const styles = StyleSheet.create({});
