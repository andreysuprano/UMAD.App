import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useContext } from "react";
import Context from "../context/auth";
import TabNavigation from "./TabNavigation.routes";
import CadastroRoutes from "./Cadastro.routes";
import { State } from "react-native-gesture-handler";

export default function Routes() {
  const { session, setSession } = useContext(Context.SessionContext);
  return (
    <NavigationContainer>
      {session.auth ? <CadastroRoutes /> : <TabNavigation />}
    </NavigationContainer>
  );
}
