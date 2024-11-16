import React from 'react';
import './nav.css';
import {Link, NavLink} from "react-router-dom";

export default function Navi(){

    return(
        <div className="nav">
            <div className="ci">
                <a href="/">
                    <img src="lg.png" alt="logo" style={{ width: '35px', height: 'auto' }}/>
                </a>
            </div>
            <div className="ci2">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' :'')}>Home</NavLink>
                <NavLink to="/about_us" className={({ isActive }) => (isActive ? 'active' :'')}>About us</NavLink>
                <NavLink to="/team" className={({ isActive }) => (isActive ? 'active' :'')}>Our team</NavLink>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' :'')}>Services & products</NavLink>
            </div>


        </div>
    )

}