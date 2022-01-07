import React, { useState }from "react";
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

import InputMasked from "../../../components/InputMasked";
import Button from "../../../components/Button";
import { Platform } from "react-native";
import Context from "../../../context/auth";
import { useContext } from "react";

export default function SeuTelefone({navigation}: {navigation: any}) {
  const { user, setUser } = useContext(Context.UserContext);
  const [telefone, setTelefone] = useState('');
  const handleContinue = () =>{
    if (telefone !== "" && telefone.length >= 15) {
      user.telefone = telefone;
      setUser(user);
      navigation.navigate('Setor',{ screen: 'Setor' });
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={Platform.OS === "android"? -500 : 0}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Seu Telefone 😀</Text>
            <Text style={styles.paragraph}>Precisamos do seu telefone para entrarmos em contato e deixa-lo informado sobre tudo!</Text>
          </View>
          <ScrollView>
            <InputMasked placeholder="123.456.789-10" mascara="telefone" value={telefone} onChangeText={setTelefone} type="decimal-pad"/> 
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
