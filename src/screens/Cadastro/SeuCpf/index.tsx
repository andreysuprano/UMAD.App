import { useContext,useState } from "react";
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

import InputMasked from "../../../components/InputMasked";
import Button from "../../../components/Button";

import Context from "../../../context/auth";


export default function SeuCpf({navigation}: {navigation: any}) {
  const [cpf, setCpf] = useState('');
  const [valid, setValid] = useState(false);
  const { user, setUser } = useContext(Context.UserContext);
  const handleContinue = () =>{
    if(cpf !== "" && cpf.length === 14){
      user.cpf = cpf;
      setUser(user);
      navigation.navigate('Nome',{ screen: 'Nome' });
    }
    else{
      setValid(true)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Seu Cpf 😀</Text>
            <Text style={styles.paragraph}>O seu Cpf é o que te torna único, em caso de premiações ele identificará você!</Text>
          </View>
          <ScrollView>
            <InputMasked placeholder="123.456.789-10" mascara="cpf" value={cpf} onChangeText={setCpf} type="decimal-pad" />
            {valid && <Text style={styles.validationReport}>Cpf Inválido</Text>}
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
    marginBottom:"10%",
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
  validationReport:{
    marginTop:-10,
    fontFamily: "Montserrat_400Regular",
    fontSize:16,
    color:"red",
    fontWeight:"800"  
  },
  buttonContainer:{
      width:"90%"
  }
});
