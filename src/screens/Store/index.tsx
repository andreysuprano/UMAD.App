import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Theme from "../../assets/styles/Theme";

import produtos from '../../mocks/produtos';

import ListItemProdutos from '../../components/ListItemProdutos';
export default function Home() {
  const [list, setList] = useState(produtos);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>UMAD Store</Text>
      </View>
      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItemProdutos data={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Theme.primary,
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
    fontFamily: "Montserrat_700Bold",
    color:Theme.square,
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
  list: {
    marginTop:25,
    width: "90%",
    height: "100%",
  },
});
