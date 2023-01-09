import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import MoviesList from "./MoviesList";

function Header(props) {
    return (
        <div style={{width: '90%', background: 'rgb(9,17,8)'}}>
            <menu style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'space-evenly',
                height: '60px',
                margin: '0px',
                textDecoration: 'none'
            }}>
                <span><Link style={{textDecoration: 'none', color: 'white'}} to={'/'}>Домой</Link></span>
                <span><Link style={{textDecoration: 'none', color: 'white'}} to={'movie'}>Фильмы</Link></span>
                <span><Link style={{textDecoration: 'none', color: 'white'}} to={'tv'}>ТВ Шоу</Link></span>
            </menu>
        </div>
    );
}

export default Header;