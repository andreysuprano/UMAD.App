import React, { createContext } from 'react';
import { useState } from 'react';

type UserType = {
    nome:string,
    cpf:string,
    email:string,
    setor:number,
    telefone:string
};
type SessionType = {
    token:string,
    auth:boolean
}
type UserContextProps = {
    user:UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
};
type SessionContextProps = {
    session:SessionType;
    setSession: React.Dispatch<React.SetStateAction<SessionType>>;
};
const SESSION_DEFAULT = {
    session:{
        token:"",
        auth:true
    },
    setSession: () => {}
};
const USER_DEFAULT = {
    user:{
        nome:"",
        cpf:"",
        email:"",
        setor:0,
        telefone:""
    },
    setUser:()=>{},
};

const UserContext = createContext<UserContextProps>(USER_DEFAULT);
const SessionContext = createContext<SessionContextProps>(SESSION_DEFAULT);

const AuthProvider = ({children}:{children:any}) => {
    const [user, setUser] = useState(USER_DEFAULT.user);
    const [session, setSession] = useState(SESSION_DEFAULT.session);
    return(
        <SessionContext.Provider value={{
            session,
            setSession,
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