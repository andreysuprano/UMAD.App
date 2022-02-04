import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
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
        <ScrollView horizontal={true} style={styles.scrollButtons} showsHorizontalScrollIndicator={false}>
          <View style={styles.buttonContainer}>
          <ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" /><ButtonMenu text="Agenda" iconName="calendar-check" />
            <ButtonMenu text="Ranking" iconName="list-ol" />
          </View>
        </ScrollView>
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
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 32,
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
  scrollButtons: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 25,
    marginTop: 15
  },
  labelContainer: {
    alignItems: 'flex-start',
  },
  label: {
    alignItems: 'flex-start',
  }
});
