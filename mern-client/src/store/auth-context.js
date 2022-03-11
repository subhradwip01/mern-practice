import { createContext, useReducer, useEffect } from "react";

export const AuthContext=createContext({
    isAuth:false,
    token:'',
    login: (token)=>{},
    logout:()=>{},
})
const initialState={
    isAuth:false,
    token:''
}

const authRedcure=(state,action)=>{
    switch (action.type){
        case "LOGGEDIN":
            return {
                isAuth:true,
                token:action.payeload
            }
        case "LOGGEDOUT":
            return {
                isAuth:false,
                token:''
            }
        default:
            return {...state}        
    }
}
const AuthContextProvider=({children})=>{
    const storedToken = localStorage.getItem('token');
    const [authState,dispatch]=useReducer(authRedcure,initialState)
    useEffect(() => {
        if(storedToken){
            dispatch({type:"LOGGEDIN",payeload:storedToken})
        }
    }, [storedToken])
    
    
    const loginHandler=(token)=>{
        dispatch({type:"LOGGEDIN",payeload:token})
        localStorage.setItem('token', token);
    }
    const logoutHandler=()=>{
        dispatch({type:"LOGGEDOUT"})
        localStorage.removeItem("token");
    }
    const contextValue={
        token:authState.token,
        isAuth:authState.isAuth,
        login:loginHandler,
        logout:logoutHandler

    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider