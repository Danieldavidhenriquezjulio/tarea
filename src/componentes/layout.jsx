import Navi from './navbar/nav.jsx'
import './layout.css'
import React from "react";
import Home from "./home.jsx";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./about/about.jsx";
import Team from "./team/team.jsx";
import Services from "./services/services.jsx";

export default function Layouth(){
    return (
        <>
            <BrowserRouter>
            <Navi/>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about_us' element={<About />}/>
                    <Route path='/team' element={<Team />}/>
                    <Route path='/services' element={<Services />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}