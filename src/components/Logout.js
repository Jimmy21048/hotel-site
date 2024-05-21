import { AuthContext } from "../helpers/AuthContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Logout() {
    const { setAuthState, setLoginState } = useContext(AuthContext);
    const history = useNavigate();
    function logout() {
        localStorage.removeItem("accessToken")
        setAuthState(false);
        setLoginState("Logout Succesful");
        history('/');

    }
    return (
        <button 
        className="logout-btn"
        onClick={logout} 
        style={{display: "none"}} 
        >
            Log out
        </button>
    )
}