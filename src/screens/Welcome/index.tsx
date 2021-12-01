import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity, SafeAreaView  } from "react-native";
import Theme from "../../assets/styles/Theme";
import Logo from "../../assets/images/logoLaranja.png";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Bem Vindo!</Text>
      <View style={styles.squareContainer}>
        <TouchableOpacity style={styles.square} activeOpacity={0.7}>
          <Text style={styles.emoji}>😀</Text>
          <Text style={styles.squareText}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} activeOpacity={0.7}>
          <Text style={styles.emoji}>😉</Text>
          <Text style={styles.squareText}>Possuo conta</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyright}>UMADCampoLargo © 2021</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.background,
    alignItems: "center",
    justifyContent: "center",
    height:"100%"
  },
  logo: {
    width: 350,
    height: 300,
  },
  title: {
    color: Theme.title,
    fontSize: 24,
    fontFamily: "Montserrat_900Black",
  },
  square: {
    width: 156,
    height: 156,
    backgroundColor: Theme.square,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  squareContainer: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  emoji: {
    fontSize: 64,
  },
  squareText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
  },
  copyright: {
    marginTop: 35,
  },
});
