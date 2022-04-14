import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import {BrowserRouter, Route, Routes, Link, Switch, HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreens';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <BrowserRouter>
      
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
