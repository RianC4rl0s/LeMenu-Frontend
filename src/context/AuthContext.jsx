
import { createContext, useState, useEffect, useContext } from "react";
// import { setCookie, parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import api from "../services/api"
import { isExpired } from "react-jwt";
import { signInRequest, recoverUserInformation } from '../services/auth';

const token = localStorage.getItem("lemenu_token");

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
    const isMyTokenExpired = isExpired(token);
    useEffect(() => {
        // const { 'lemenu.token': token } = parseCookies();
        
       
       
        //console.log(token)
        if (token && !isMyTokenExpired) {
            recoverUserInformation().then(response => setUser(response.user));
        }
        else {
            localStorage.removeItem("lemenu_token")
            navigate('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function signIn(data) {
        const { token } = await signInRequest(data);
        //console.log("Token" + token)
        // setCookie(undefined, 'lemenu.token', token, {
        //     maxAge: 60 * 60 * 1 // 1 hour
        // });
        localStorage.setItem("lemenu_token", token);
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        await recoverUserInformation()
            .then(response => {
                setUser(response.user);
                localStorage.setItem("user_role",response.user.roles );
                if (response.user.roles === 'ROLE_ADMIN' || response.user.roles === 'ROLE_SUPER_ADMIN')
                    navigate('/adm')
                else if (response.user.roles === 'ROLE_ATTENDANT' || response.user.roles === 'ROLE_SUPER_ATTENDANT')
                    navigate('/atendente')

                else
                    navigate('/')
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
