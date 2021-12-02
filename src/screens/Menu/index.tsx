import React from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";
import Theme from "../../assets/styles/Theme";

export default function Menu() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Menu</Text>
    </View>
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
  text:{
      fontSize:24,
      fontWeight:"800"
  }
});
