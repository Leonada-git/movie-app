import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import FavorieLogic from "./components/treatment/FavorieLogic";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App=()=>{
    return(<div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favories" element={<FavorieLogic/>}/>
      </Routes>
      <Footer/>

    </div>)

}
export default App;