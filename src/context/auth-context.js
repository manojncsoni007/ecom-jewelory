import { useState, createContext, useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
import { showToast } from "../utils/toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("")
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const loginUser = async (email, password) => {
        try {
            const {
                data: { foundUser, encodedToken }, status
            } = await axios.post('/api/auth/login', { email, password });
            if (status === 200) {
                setToken(encodedToken);
                setIsLoggedIn(true);
                setUser(foundUser);
                navigate(location.state?.from?.pathname || "/");
                localStorage.setItem("token", encodedToken);
                showToast("success","You logged in successfully");
            }
        } catch (error) {
              showToast("error",error);
        }
    }

    const signupUser = async (firstName, lastName, email, password,) => {
        try {
            const {
                data: { createdUser, encodedToken }
            } = await axios.post('/api/auth/signup', {
                firstName, lastName, email, password
            });
            setIsLoggedIn(true);
            setToken(encodedToken);
            localStorage.setItem("token", encodedToken);
            setUser(createdUser);
            navigate(location.state?.from?.pathname || "/");
            showToast("success","You Signed up successfully");
        } catch (error) {
            if (error.response.status === 422) {
                showToast("error","Email is already regitered");
            }
        }
    }


    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            token,
            setToken,
            user,
            setUser,
            loginUser,
            signupUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider }