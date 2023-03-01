import { useAuthStore } from "../store/authStore";
import {useNavigate} from 'react-router-dom'

function ProfilePage(){
    const logout = useAuthStore(state => state.logout)
    const profile = useAuthStore(state => state.profile)
    const navigate = useNavigate();
    return(
        <div>
            <h3>Profile Page</h3>
            <div>{JSON.stringify(profile)}</div>
            <button className="btn btn-success"
                onClick={()=>{
                    logout()
                    navigate('/login')
                }}
            >LogOut</button>
        </div>
    )
}

export default ProfilePage;