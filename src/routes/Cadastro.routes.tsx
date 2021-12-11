import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SeuCpfScreen from "../screens/Cadastro/SeuCpf";
import SeuEmailScreen from "../screens/Cadastro/SeuEmail";
import SeuNomeScreen from "../screens/Cadastro/SeuNome";
import SeuSetorScreen from "../screens/Cadastro/SeuSetor";
import SeuTelefoneScreen from "../screens/Cadastro/SeuTelefone";
import SuaSenhaScreen from "../screens/Cadastro/SuaSenha";
import WelcomeScreen from "../screens/Welcome";

const {Navigator, Screen} = createNativeStackNavigator();

const CadastroRoutes = () => {
    const options = {
        headerShown:false
    }
    return(
        <Navigator>
            <Screen options={options} name="Welcome" component={WelcomeScreen}/>
            <Screen options={options} name="Cpf" component={SeuCpfScreen}/>
            <Screen options={options} name="Nome" component={SeuNomeScreen}/>
            <Screen options={options} name="Setor" component={SeuSetorScreen}/>
            <Screen options={options} name="Email" component={SeuEmailScreen}/>
            <Screen options={options} name="Telefone" component={SeuTelefoneScreen}/>
            <Screen options={options} name="Senha" component={SuaSenhaScreen}/>
        </Navigator>
    )
}
export default CadastroRoutes;