import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js"
import { Routes, Route, Link } from "react-router-dom";

import { ProductList } from "./ProductList";

import {Home} from "./components/Home/Home";

import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/Wishlist";

import Login from "./components/Login"

import RequiresAuth from "./components/Authentication/RequiresAuth";
import Signup from "./components/Signup/Signup";



function App() {

  


  


  return (
    <div className="App">

 

        <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<ProductList/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>


        <Route path="/cart" element={
        
        
        <RequiresAuth>
          <Cart/>
          
        </RequiresAuth>
     } />
        <Route path="/wishlist" element={
             <RequiresAuth>


<WishList/>
             </RequiresAuth>
        
 
        
        
        } />
      






      
      </Routes>

      {/* <button onClick={clickHandler}>CLick me</button> */}
    
    </div>
  );
}

export default App;
