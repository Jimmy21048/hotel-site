import { Link } from "react-router-dom"
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Services({ checkFood }) {
    const {setLoginState, setAuthState, authState, username} = useContext(AuthContext);
    const history = useNavigate();

    // axios.get("http://localhost:3001/login/auth", {
        axios.get("https://uradi-encore-server.onrender.com/auth", {
          headers : {
            accessToken: localStorage.getItem("accessToken")
          }
        })
        .then((response) => {
          if(response.data.error) {
            setAuthState(false);
          } else {
            setAuthState(true);
            username.current = ({
              fname: response.data.fname,
              lname: response.data.lname,
              fnameI: response.data.fnameI,
              lnameI: response.data.lnameI
            })
          }
        })

    function logout() {
        localStorage.removeItem("accessToken")
        setAuthState(false);
        setLoginState("Logout Succesful");
        history('/');

    }


    return (
        <header className="services-header">
            <Link to="/"><img src='../images/uradi-logo2.png' alt='hotel-logo' /></Link>

            <input type='checkbox' id="btn"/>
            <label htmlFor="btn" id="btn1"><i className="fa-solid fa-bars"></i></label>
            <div className="services-tabs">
                <label htmlFor="btn" id="btn2"><i className="fa-solid fa-xmark"></i></label>
                <Link to="/main/foods">Menu</Link>
                <Link to="/main/rooms">Rooms</Link>
                <Link to="/main/games">Activities</Link>
                <Link to="/about">About</Link>
                <div className="acc-logout"  >
                    {
                        !authState ? 
                        <p style={{display: "none"}}>Not logged in</p>
                        : 
                        <>
                        <p style={{display: "none"}}>{username.current.fname} {username.current.lname}</p>
                        <button className="logout-btn" onClick={logout} style={{display: "none"}} >Log out</button>
                        </>
                    }
                </div>
                
            </div>
        </header>
    )
}