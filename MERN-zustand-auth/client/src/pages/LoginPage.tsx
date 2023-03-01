import React from "react"
import { loginRequest, profileRequest } from "../services/authService";
import { useAuthStore } from "../store/authStore";
import {useNavigate} from "react-router-dom";

export default function LoginPage(){
    const setToken = useAuthStore(state => state.setToken)
    const setProfile = useAuthStore(state => state.setProfile)
    const navigate = useNavigate()

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value

        const resLogin = await loginRequest(email, password);
        setToken(resLogin.data.token)
        const restProfile = await profileRequest()
        setProfile(restProfile.data.profile);

        navigate('/profile');
    }

    return (
        <form className="card card-body text-black"
            onSubmit={handleSubmit}>
            <h5 className="text-center">Login</h5>


            <input type="text" className="form-control my-2" placeholder="Ingresa tu email"/>   

            <input type="password" className="form-control my-2" placeholder="Ingresa tu contraseña" />
            <button className="btn btn-success">
                Login
            </button>
        </form>
    )
}