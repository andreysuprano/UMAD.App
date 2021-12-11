import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import Theme from "../../assets/styles/Theme";
import camisetaThumb from "../../assets/images/camiseta.png";

type listItemProps = {
  data: any;
};

const ListItemProdutos = ({ data }: listItemProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>Camiseta UMAD - Modelo 2021</Text>
      </View>
      <View style={styles.cardImage}>
        <Image style={styles.image} source={camisetaThumb} />
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.price}>R${data.preco}0</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          {<Text style={styles.buttonText}>Comprar</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 355,
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginBottom: 35,
    padding: 30,
  },
  cardHeader: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    fontWeight: '700'
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "stretch",
  },
  cardImage: {
    marginTop: 10,
  },
  cardFooter: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  price: {
    color: Theme.primary,
    fontSize: 26,
    fontFamily: "Montserrat_700Bold",
  },
  button: {
    backgroundColor: Theme.primary,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginLeft: 10
  },
  buttonText: {
    color: Theme.square,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
  },
});

export default ListItemProdutos;
