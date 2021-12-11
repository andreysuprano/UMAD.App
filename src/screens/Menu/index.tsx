import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import Theme from "../../assets/styles/Theme";
import Avatar from "../../assets/images/Avatar.png";

export default function Menu() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.personContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={Avatar} />
            </View>
            <View style={styles.textPersonContainer}>
              <Text style={styles.nomeUsuario}>Andrey Suprano</Text>
              <Text style={styles.pontosValor}>200<Text style={styles.pontosLabel}> Pontos</Text></Text>
            </View>
          </View>
          <View style={styles.personContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={Avatar} />
            </View>
            <View style={styles.textPersonContainer}>
              <Text style={styles.nomeUsuario}>Andrey Suprano</Text>
              <Text style={styles.pontosValor}>200<Text style={styles.pontosLabel}> Pontos</Text></Text>
            </View>
          </View>

          <View style={styles.personContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={Avatar} />
            </View>
            <View style={styles.textPersonContainer}>
              <Text style={styles.nomeUsuario}>Andrey Suprano</Text>
              <Text style={styles.pontosValor}>200<Text style={styles.pontosLabel}> Pontos</Text></Text>
            </View>
          </View>

          <View style={styles.personContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={Avatar} />
            </View>
            <View style={styles.textPersonContainer}>
              <Text style={styles.nomeUsuario}>Andrey Suprano</Text>
              <Text style={styles.pontosValor}>200<Text style={styles.pontosLabel}> Pontos</Text></Text>
            </View>
          </View>

          <View style={styles.personContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={Avatar} />
            </View>
            <View style={styles.textPersonContainer}>
              <Text style={styles.nomeUsuario}>Andrey Suprano</Text>
              <Text style={styles.pontosValor}>200<Text style={styles.pontosLabel}> Pontos</Text></Text>
            </View>
          </View>

          <View style={styles.personContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={Avatar} />
            </View>
            <View style={styles.textPersonContainer}>
              <Text style={styles.nomeUsuario}>Andrey Suprano</Text>
              <Text style={styles.pontosValor}>200<Text style={styles.pontosLabel}> Pontos</Text></Text>
            </View>
          </View>

          <View style={styles.personContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={Avatar} />
            </View>
            <View style={styles.textPersonContainer}>
              <Text style={styles.nomeUsuario}>Andrey Suprano</Text>
              <Text style={styles.pontosValor}>200<Text style={styles.pontosLabel}> Pontos</Text></Text>
            </View>
          </View>

          <View style={styles.personContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={Avatar} />
            </View>
            <View style={styles.textPersonContainer}>
              <Text style={styles.nomeUsuario}>Andrey Suprano</Text>
              <Text style={styles.pontosValor}>200<Text style={styles.pontosLabel}> Pontos</Text></Text>
            </View>
          </View>


        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    backgroundColor: Theme.background,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
    paddingTop: "5%",
  },
  text: {
    fontSize: 24,
    fontWeight: "800"
  },
  header: {
    width: '100%',
    height: '100%',
    backgroundColor: Theme.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 25
  },
  avatarContainer: {
    backgroundColor: Theme.square,
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 43,
    borderColor: Theme.primary
  },
  topContainer: {
    alignContent: "center",
    justifyContent: "center",
    width: '90%',
  },
  personContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Theme.square,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 4.65,

    elevation: 6,
  },
  nomeUsuario: {
    color: Theme.title,
    fontFamily: 'Montserrat_800ExtraBold',
    fontWeight: '800',
    fontSize: 18,
  },
  textPersonContainer: {
    marginLeft: 15,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  pontosValor: {
    color: Theme.title,
    fontFamily: 'Montserrat_800ExtraBold',
    fontWeight: '800',
    marginTop: 10,
    fontSize: 18,
  },
  pontosLabel: {
    color: Theme.title,
    fontWeight: '300',
    fontFamily: 'Montserrat_400Regular',
    marginTop: 15,
    fontSize: 16,
  }
});
