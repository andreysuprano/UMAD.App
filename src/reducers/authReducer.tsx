export type AuthState = {
	session:{
		token: string,
		auth: boolean
	}
}

export type AuthActionDispatch = | {
	type: 'SET_LOGGED_IN',
	payload: { auth: boolean, token:string }
}
|{
	type:'SET_LOGGED_OUT',
} 

export const authReducer = (prevState:AuthState, action:AuthActionDispatch) => {
	switch (action.type) {
		case 'SET_LOGGED_IN':
			return {
				session:{
					token: action.payload.token,
					auth: action.payload.auth
				}
			};

		case 'SET_LOGGED_OUT':
			return {
				session:{
					token:'',
					auth: false
				}
			};
		default:
			throw new Error();
	}
};
