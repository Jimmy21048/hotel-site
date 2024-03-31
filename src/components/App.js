
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import Main from './Main';
import Foods from './Foods';
import Rooms from './Rooms';
import Games from './Games';
import RoomDetails from './RoomDetails';
import About from './About';
import Book from './Book';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/main' element = {<Main />} />
        <Route path='/main/foods' element = {<Foods />} />
        <Route path='/main/rooms' element = {<Rooms />} />
        <Route path='/main/games' element = {<Games />} />
        <Route path='/main/rooms/:id' element = {<RoomDetails />} />
        <Route path='/about' element = {<About />} />
        <Route path='/booking' element = {<Book />} />
      </Routes>
    </div>
  );
}

export default App;
