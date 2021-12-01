import React from "react";
import { View, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

import SeuNome from './src/screens/Cadastro/SuaSenha';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <SeuNome/>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      </View>
    );
  }
}
