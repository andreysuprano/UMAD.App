import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useContext } from "react";
import Context from "../context/auth";
import TabNavigation from "./TabNavigation.routes";
import CadastroRoutes from "./Cadastro.routes";

export default function Routes() {
  const { session } = useContext(Context.SessionContext);
  return (
    <NavigationContainer>
        {session.auth ? <TabNavigation /> : <CadastroRoutes /> }
    </NavigationContainer>
  );
}
