
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import Foods from './Foods';
import Rooms from './Rooms';
import Games from './Games';
import RoomDetails from './RoomDetails';
import About from './About';
import Book from './Book';
import Signup from './Signup';
import Login from './Login';
import Account from './Account';
import { AuthContext } from '../helpers/AuthContext';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';


function App() {
  const [authState, setAuthState] = useState(false);
  const [loginState, setLoginState] = useState('');
  const username = useRef({fname: '', lname: ''});

  useEffect(() => {
    axios.get("http://localhost:3001/login/auth", {
    // axios.get("https://uradi-encore-server.onrender.com/auth", {
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
          lname: response.data.lname
        })
      }
    })
  }, [authState])
  return (
    <div className="app">
      <AuthContext.Provider value={{authState, setAuthState, loginState, setLoginState, username}}>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/main/foods' element = {<Foods />} />
        <Route path='/main/rooms' element = {<Rooms />} />
        <Route path='/main/games' element = {<Games />} />
        <Route path='/main/rooms/:id' element = {<RoomDetails />} />
        <Route path='/about' element = {<About />} />
        <Route path='/booking' element = {<Book />} />
        <Route path='/account' element = {<Account />} />
      </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
