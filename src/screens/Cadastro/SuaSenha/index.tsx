import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Theme from "../../../assets/styles/Theme";

import InputOnFocus from "../../../components/InputOnFocus";
import Button from "../../../components/Button";

export default function SuaSenha() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Escolha uma Senha 🔒</Text>
            <Text style={styles.paragraph}>Escolha uma senha alfa-numérica usando caracteres maiúsculos e minusculos para garantir maior segurança!</Text>
          </View>
          <ScrollView>
            <InputOnFocus placeholder="Senha"/>
            <InputOnFocus placeholder="Repita a Senha"/>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
            <Button text="Continuar" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Theme.background,
    alignItems: "center",
    justifyContent:"space-between",
    paddingTop:"20%",
    paddingBottom:"10%"
  },
  content: {
    width: "90%",
    backgroundColor: Theme.background,
  },
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: "10%",
  },
  title: {
    fontSize: 38,
    fontFamily: "Montserrat_700Bold",
  },
  paragraph:{
    marginTop:"2%",
    fontFamily: "Montserrat_400Regular",
    fontSize:16
  },
  buttonContainer:{
      width:"90%"
  }
});