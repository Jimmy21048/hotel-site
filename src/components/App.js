
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/main' element = {<Main />} />
      </Routes>
    </div>
  );
}

export default App;
