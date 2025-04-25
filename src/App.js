import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle }  from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
import Protected from "./Components/Protected";

const App = () => {

  const theme = {
    colors : {
      bg: "#F6F8FA",
      heading : "rgb(24, 24, 29)",
      text : "rgba(29, 29, 29, 0.8)",
      btn : "rgb(98, 84, 243)",
      white : "#fff",
      black : "#212529",
      helper: "#8490ff",
      footer_bg : "#0a1435",
      border : "rgba(98, 84, 243, 0.5)",
      hr : "#ffffff",
      gradient :  "linear-gradient(0deg, #667eea 0%, #764ba2 100%)",
      shadow : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      
    },

    media : {
      mobile : "768px",
      tab : "1024px"
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Protected Component={Products}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Protected Component={Cart}/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>

    </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
