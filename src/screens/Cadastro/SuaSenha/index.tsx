import React, { useContext, useState, useReducer } from "react";
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
import { register } from "../../../services/api";

export default function SuaSenha() {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [valid, setValid] = useState(false);
  const { user } = useContext(Context.UserContext);
  const { login } = useContext(Context.SessionContext);
  
  const handlePassword = async () => {
    if (password === '' || password === ' ' ||
      checkPassword === '' || checkPassword === ' '
    ) {
      setError('Preencha todos os campos!');
      setValid(true);
      return;
    }
    if (password === checkPassword) {
      setValid(false);
      user.password = password;
      setIsLoading(true);
      register(user).then((res)=>{
        setIsLoading(false);
        login(res.data.token, res.data.auth);
      });
    } else {
      setError('Senhas Diferentes!');
      setValid(true);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Escolha uma Senha 🔒</Text>
            <Text style={styles.paragraph}>Escolha uma senha alfa-numérica usando caracteres maiúsculos e minusculos para garantir maior segurança!</Text>
          </View>
          <ScrollView>
            <Input secureTextEntry={true} placeholder="Senha" value={password} onChangeText={(text) => { setPassword(text) }} />
            <Input secureTextEntry={true} placeholder="Repita a Senha" value={checkPassword} onChangeText={(text) => { setCheckPassword(text) }} />
            {valid && <Text style={styles.validationReport}>{error}</Text>}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Continuar" onClick={handlePassword} isLoading={isLoading}/>
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
    paddingBottom: "10%"
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
    fontSize: 16
  },
  buttonContainer: {
    width: "90%"
  },
  validationReport: {
    marginTop: -10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: "red",
    fontWeight: "800"
  },
});
