
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import Main from './Main';
import Foods from './Foods';
import Rooms from './Rooms';
import Games from './Games';
import Scenary from './Scenary';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/main' element = {<Main />} />
        <Route path='/main/foods' element = {<Foods />} />
        <Route path='/main/rooms' element = {<Rooms />} />
        <Route path='/main/games' element = {<Games />} />
        <Route path='/main/scenary' element = {<Scenary />} />
      </Routes>
    </div>
  );
}

export default App;
