import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Theme from "../../assets/styles/Theme";
import ButtonMenu from "../../components/ButtonMenu";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>
          Bem Vindo, <Text style={{ color: Theme.primary }}>Andrey</Text>!
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <ButtonMenu text="Agenda" iconName="calendar-check" />
          <ButtonMenu text="Ranking" iconName="list-ol" />
          <ButtonMenu text="Retiros" iconName="tree" />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonMenu text="Agenda" iconName="calendar-check" />
          <ButtonMenu text="Ranking" iconName="list-ol" />
          <ButtonMenu text="Retiros" iconName="tree" />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonMenu text="Agenda" iconName="calendar-check" />
          <ButtonMenu text="Ranking" iconName="list-ol" />
          <ButtonMenu text="Retiros" iconName="tree" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Theme.background,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "20%",
    paddingBottom: "10%",
  },
  content: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  text: {
    fontSize: 36,
    fontWeight: "800",
  },
  buttonContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    width: "90%",
  },
});
