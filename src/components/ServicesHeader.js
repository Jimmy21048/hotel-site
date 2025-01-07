import { Link } from "react-router-dom"
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import axios from 'axios';
export default function Services({ checkFood }) {
    const { setAuthState, authState,  username} = useContext(AuthContext);

    axios.get(process.env.LOGIN_AUTH, {
        // axios.get("https://uradi-encore-server.onrender.com/login/auth", {
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
                <Link className="button"  to="/main/foods" ><i className="fa-solid fa-mug-hot"></i>Menu</Link>
                <Link className="button"  to="/main/rooms" ><i className="fa-solid fa-bed"></i>Rooms</Link>
                <Link className="button"  to="/main/games" ><i className="fa-solid fa-puzzle-piece"></i>Activities</Link>
                <Link className="button"  to="/about" ><i className="fa-solid fa-circle-info"></i>About</Link>
                
            </div>
            {
              authState ? <Link className='user-account-initials' to='/account'>{username.current.fnameI} {username.current.lnameI}</Link>:
              <Link className="button" to='/login'>login</Link>
            }
        </header>
    )
}
