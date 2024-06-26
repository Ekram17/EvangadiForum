import { createContext, useEffect, useReducer } from "react";
import {useNavigate} from "react-router-dom"
import Cookies from "js-cookie"
import { axiosInstance, endPoint } from "../../endPoint/api";
import LogIn from "../LogIn/LogIn";

const cookie = Cookies;
const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: true,
};

const reducer = (state, action) =>{
    switch (action.type) {

        case "SET-USER":
            return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
            isLoading: false,
            };
            case "LOGOUT":
            return {
                ...state,
                isAuthenticated:false,
                user: null,
                isLoading: false,
            };
            default:
                return state;
    }
};

export const Authcontext = createContext ();

export const Authprovider = ({children}) =>{
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, initialState);

        useEffect( () =>{

        const checkAuthentication = async () =>{
            const token = cookie.get("accessToken");

            if (token){
                try {
                    const response = await axiosInstance.get(endPoint.ME, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (response.status === 200) {
                        
                        dispatch({
                            type: "SET-USER",
                            payload: response.data?.user,
                        });
                    }
                }catch (error) {
                    console.log ("Authecation Error",error);
                    dispatch({
                        type: "LOGOUT",
                    });
                    navigate("/");
                }
            }else {
                dispatch({
                    type: "LOGOUT",
                });
                navigate("/");
            }
        };
        checkAuthentication();
        }, [navigate] ) ;

        const logout = () =>{
            cookie.remove("accessToken");

            dispatch({ type: "LOGOUT"});

            navigate("/");
        };


        const login = async(email, password)=> {
            try {   
                const response = await axiosInstance.post(endPoint.LOGIN, {
                    email,
                     password,
                });

                if (response.status === 200) {
                    const {accessToken, user} = response.data;

                    cookie.set("accessToken", accessToken);

                    dispatch({type: "SET-USER", payload:response.data?.data?.user});
                    navigate("/home");
                }

            } catch (error) {
                console.error("LogIn Error", error);
            }
        };

        return (
            <AuthContext.provider value={{state, logout, login}}>
                {children}
            </AuthContext.provider>
        ) ;
};