import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import Theme from "../../assets/styles/Theme";

type InputProps = {
  placeholder: string;
  mask:string;
};
export default function InputOnFocus({ placeholder,...copy}: InputProps) {
  const [active, setActive] = useState(false);
  function handleFocus() {
    setActive(true);
  }
  function handleBlur() {
    setActive(false);
  }
  
  const mascaraCPF = (cpf:string) => {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    
    return cpf;
  }
  const handleMaskValue = () => {

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
