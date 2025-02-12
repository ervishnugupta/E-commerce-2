import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {AppProvider} from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/Filter_Context";
import { CartContextProvider } from "./Context/Cart_Context";
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
    domain="dev-3g15sse64jb44qrx.us.auth0.com"
    clientId="0IA1kjyYUP22ertVe1XoAcYWhTsJOOY2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   
    <AppProvider>
        <FilterContextProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </FilterContextProvider>
    </AppProvider>

    
  </Auth0Provider>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
