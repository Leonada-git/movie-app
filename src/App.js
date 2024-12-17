import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageFilm from "./components/Pages/PageFilm";
import PageFav from "./components/Pages/PageFav";
import PageAjout from "./components/Pages/PageAjout";

const App=()=>{
    return(<div>
      <Header/>
      <Routes>
        <Route path="/" element={<PageFilm/>}/>
        <Route path="/favories" element={<PageFav/>}/>
        <Route path="/Ajout" element={<PageAjout/>}/>
      </Routes>
      <Footer/>

    </div>)

}
export default App;