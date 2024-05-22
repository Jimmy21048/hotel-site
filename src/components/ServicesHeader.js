import { Link } from "react-router-dom"
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Logout from "./Logout";
export default function Services({ checkFood }) {
    const { setAuthState, authState, username} = useContext(AuthContext);
    const history = useNavigate();

    // axios.get("http://localhost:3001/login/auth", {
        axios.get("https://uradi-encore-server.onrender.com/login/auth", {
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


    return (
        <header className="services-header">
            <Link to="/"><img src='../images/uradi-logo2.png' alt='hotel-logo' /></Link>
            <div className="services-tabs">
                <Link className="button"  to="/main/foods" ><i class="fa-solid fa-mug-hot"></i>Menu</Link>
                <Link className="button"  to="/main/rooms" ><i class="fa-solid fa-bed"></i>Rooms</Link>
                <Link className="button"  to="/main/games" ><i class="fa-solid fa-puzzle-piece"></i>Activities</Link>
                <Link className="button"  href="/about" ><i class="fa-solid fa-circle-info"></i>About</Link>
                <div className="acc-logout" >
                    {
                        !authState ? 
                        <p style={{display: "none"}}>Not logged in</p>
                        : 
                        <>
                        <p style={{display: "none"}}>{username.current.fname} {username.current.lname}</p>
                        <Logout />
                        </>
                    }
                </div>
                
            </div>
        </header>
    )
}
