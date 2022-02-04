import React, { useContext, useState } from "react";
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

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Context from "../../../context/auth";
import { Platform } from "react-native";

export default function SeuNome({ navigation }: { navigation: any }) {
  const { user, setUser } = useContext(Context.UserContext);
  const [valid, setValid] = useState(true);
  const [nome, setNome] = useState("");

  const handleContinue = () => {
    if(nome !== "" && nome.length >= 8){
      user.nome = nome;
      setUser(user);
      navigation.navigate("Email", { screen: "Email" });
    }
    else{
      setValid(false)
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={Platform.OS === "android"? -500 : 0}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Seu Nome 😀</Text>
            <Text style={styles.paragraph}>
              Precisamos do seu nome para nos comunicarmos com você e oferecer
              uma melhor experiência!
            </Text>
          </View>
          <ScrollView>
            <Input
              placeholder="Nome Completo"
              value={nome}
              onChangeText={setNome}
            />
            {!valid && <Text style={styles.validationReport}>Nome Pequeno de mais ou vazio</Text>}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Continuar" onClick={handleContinue} isLoading={false}/>
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
  paragraph: {
    marginTop: "2%",
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
  buttonContainer: {
    width: "90%",
  },
  validationReport: {
    marginTop: -10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: "red",
    fontWeight: "800",
  },
});
