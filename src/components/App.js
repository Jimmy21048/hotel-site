
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
import { useState, useRef } from 'react';


function App() {
  const [authState, setAuthState] = useState(false);
  const [loginState, setLoginState] = useState('');
  const [loading, setLoading] = useState(true);
  const username = useRef({fname: '', lname: ''});

  return (
    <div className="app">
      <AuthContext.Provider value={{authState, loading, setLoading, setAuthState, loginState, setLoginState, username}}>
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
