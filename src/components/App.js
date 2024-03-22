
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import Main from './Main';
import Foods from './Foods';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/main' element = {<Main />} />
        <Route path='/main/foods' element = {<Foods />} />
      </Routes>
    </div>
  );
}

export default App;
