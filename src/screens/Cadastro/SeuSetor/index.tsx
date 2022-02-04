import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
  FlatListProps,
} from "react-native";

import ListItemSetor from "../../../components/ListItemSetor";

import Theme from "../../../assets/styles/Theme";
import setorList from "../../../utils/setorList";
import Context from "../../../context/auth";


export default function SeuSetor({ navigation }: { navigation: any }) {
  const [list, setList] = useState(setorList);
  const { user, setUser } = useContext(Context.UserContext);

    // useEffect(()=>{
    //   navigation.navigate("Senha",{screen:"Senha"})
    // },[user])

  return (
    <TouchableWithoutFeedback>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Escolha o setor ao qual faz parte!</Text>
            <Text style={styles.paragraph}>
              O seu Cpf é o que te torna único, em caso de premiações ele
              identificará você!
            </Text>
          </View>
          <FlatList
            data={list}
            style={styles.list}
            renderItem={({ item }) => <ListItemSetor data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    width: "90%",
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
  list: {
    width: "100%",
    height: "60 %",
  },
});
