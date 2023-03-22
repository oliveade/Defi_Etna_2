import React, {createContext} from "react";
import axios from 'axios'
export const AuthContext = createContext();



export const AuthProvider = ({children} )=> {
    const login = (email, password) => {
        setIsLoading(true);
    
        axios
          .post(`${BASE_URL}/login`, {
            email,
            password,
          })
          .then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
          })
          .catch(e => {
            console.log(`login error ${e}`);
            setIsLoading(false);
          });
      };
    return(
        <AuthContext.Provider value="test value changed">
        {children}
        </AuthContext.Provider>
    );
} 