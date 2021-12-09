import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Shop from "./Shop/Shop";
import Cart from './Cart/Cart';
import './App.css';
import Login from "./features/Login";
import {useStateValue} from './Shop/StateProvider';
import { auth } from "./features/firbase";

function App() {

  const [{user}, dispatch ] = useStateValue();
  useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
          dispatch({
              type:"SET_USER",
              user: authUser,
          })
      }else{
          dispatch({
              type:"SET_USER",
              user: null,
          });
      }

      });
  return ()=>{
      unsubscribe();
  }
  }
  ,[])

  console.log("USER IS>>> ", user);

  return (
    <Router>
    <Routes>
      <Route exact path='/home' element={<Homepage />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/' element={<Login />}/>
      </Routes>
      </Router>
  );
}

export default App;
