import { createContext, useState, useEffect, useContext } from "react";
// import { setCookie, parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import api from "../services/api"

import { signInRequest, recoverUserInformation } from '../services/auth';


export const AuthContext = createContext({
    isAuthenticated: false,
    user: null,
    signIn: (data) => { throw new Error('Function not exists') }
});

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    // const history = useHistory();
    const [user, setUser] = useState(null);
    const isAuthenticated = !!user;

    useEffect(() => {
        // const { 'lemenu.token': token } = parseCookies();
         const token   = localStorage.getItem("lemenu_token");

         console.log(token)
        // if (token) {
        //     recoverUserInformation().then(response => setUser(response.user));
        // } else {
        //     navigate('/');
        // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function signIn(data) {
        const  {token}  = await signInRequest(data);
        console.log("Token" + token)
        // setCookie(undefined, 'lemenu.token', token, {
        //     maxAge: 60 * 60 * 1 // 1 hour
        // });
        localStorage.setItem("lemenu_token",token);
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        await recoverUserInformation()
            .then(response => {
                setUser(response.user);

                if (response.user.roles === 'ROLE_ADMIN' || response.user.roles === 'ROLE_SUPERVISOR')
                navigate('/adm')
                else
                navigate('/estabelecimento/home')
            })
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuthContext should use AuthContext");
    const { isAuthenticated, user, signIn } = context;
    return { isAuthenticated, user, signIn };
}