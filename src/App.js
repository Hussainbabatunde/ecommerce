import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Shop from "./Shop/Shop";
import Cart from './Cart/Cart';
import './App.css';
import Login from "./features/Login";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Homepage />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/login' element={<Login />}/>
      </Routes>
      </Router>
  );
}

export default App;
