import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {FilterProvider} from "./context/filter-context";

import {CartProvider} from "./context/cart-context";

import {AuthProvider } from "./context/auth-context";




// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
   
      <BrowserRouter>
      <FilterProvider>
        
        <CartProvider>
          <AuthProvider>

      
    
       <App />
       </AuthProvider>
     
       </CartProvider>
       </FilterProvider>
   
    </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById("root")
);
