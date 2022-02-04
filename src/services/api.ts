import { client } from './client';

type UserType = {
    nome:string,
    cpf:string,
    email:string,
    setor:number,
    telefone:string,
    password:string
};

export const register = async (usuario:UserType) =>{
    console.log('user: ',usuario)
    return await client.post('/auth/register', usuario);
}