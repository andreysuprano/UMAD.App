import React, { useCallback, useState } from "react";
import { KeyboardTypeOptions } from "react-native";
import MaskInput, {MaskInputProps, Masks} from 'react-native-mask-input';
import Theme from "../../assets/styles/Theme";

type InputProps = {
  placeholder: string;
  mascara:string;
  type:KeyboardTypeOptions;
};

export default function InputOnFocus({ placeholder, mascara, type, ...rest}: InputProps & MaskInputProps) {
  const [active, setActive] = useState(false);

  function handleFocus() {
    setActive(true);
  }

  function handleBlur() {
    setActive(false);
  }

  return (
    <MaskInput
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
      mask={() => {
        switch(mascara){
          case "cpf":
            return Masks.BRL_CPF;
          case "telefone":
            return Masks.BRL_PHONE;
          default:
            return [];
        }
      }}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
      keyboardType={type}
    />
  );
}