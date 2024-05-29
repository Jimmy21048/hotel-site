import { AuthContext } from "../helpers/AuthContext";
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
        <button className='setting' onClick={logout}><i style={{backgroundColor: "#E60026"}} className="fa-solid fa-arrow-right-from-bracket"></i>LOG OUT</button>
    )
}