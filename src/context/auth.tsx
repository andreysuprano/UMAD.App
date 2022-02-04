import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { authReducer } from '../reducers/authReducer';

type UserType = {
    nome:string,
    cpf:string,
    email:string,
    setor:number,
    telefone:string,
    password:string
};
type SessionType = {
    session:{
        token:string,
        auth:boolean
    }
}
type UserContextProps = {
    user:UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
};
const SESSION_DEFAULT = {
    session:{
        token:'',
        auth:false
    }
};
const USER_DEFAULT = {
    user:{
        nome:"",
        cpf:"",
        email:"",
        setor:0,
        telefone:"",
        password:""

    },
    setUser:()=>{},
};

export type AuthDataContext = SessionType & {
    login:(token:string, auth:boolean)=> Promise<void> | undefined;
    logout:()=> Promise<void> | undefined;
}

const UserContext = createContext<UserContextProps>(USER_DEFAULT);
const SessionContext = createContext<AuthDataContext>({} as AuthDataContext);

const AuthProvider = ({children}:{children:any}) => {
    const [user, setUser] = useState(USER_DEFAULT.user);
    const [state, dispatch] = useReducer(authReducer, SESSION_DEFAULT);

    useEffect(()=>{
        async function isLoggedin(){
            const token = await AsyncStorage.getItem('@UMADApp:token');
            if(token)
                return dispatch({type:'SET_LOGGED_IN', payload:{auth:true, token:token}});
        }
        isLoggedin();
    },[])

    async function login(token:string, auth:boolean){
        try{
            await AsyncStorage.setItem('@UMADApp:token', token)
        }catch(err){
            console.log(err)
        }
        dispatch({type:'SET_LOGGED_IN', payload:{auth:auth, token:token}});
    }

    async function logout(){
        dispatch({type:'SET_LOGGED_OUT'});
        try{
            await AsyncStorage.clear();
        }catch(err){
            console.log(err)
        }
    }

    return(
        <SessionContext.Provider value={{
            ...state,
            login,
            logout,
        }}>
            <UserContext.Provider value={{
                user,
                setUser,
            }}>
                {children}
            </ UserContext.Provider>
        </SessionContext.Provider>
    );
};

export { AuthProvider };
export default {
    UserContext,
    SessionContext
}