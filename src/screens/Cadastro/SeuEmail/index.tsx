import React, { useState, useContext } from "react";
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

export default function SeuEmail({ navigation }: { navigation: any }) {
  const { user, setUser } = useContext(Context.UserContext);
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (email !== "" && email.length >= 3) {
      user.email = email;
      setUser(user);
      navigation.navigate('Telefone',{ screen: 'Telefone' });
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={Platform.OS === "android"? -500 : 0}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Seu Email 😀</Text>
            <Text style={styles.paragraph}>
              Precisamos do seu email para identificarmos seu cadastro visto que
              só é possível cadastrar o email uma única vez!
            </Text>
          </View>
          <ScrollView>
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Continuar" onClick={handleContinue} />
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
    justifyContent: "space-between",
    paddingTop: "20%",
    paddingBottom: "10%",
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
});
