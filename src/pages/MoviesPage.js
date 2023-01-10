import React from 'react';
import Header from "../components/Header";
import {Route, Routes, useParams} from "react-router-dom";
import MoviesList from "../components/MoviesList";
import MovieInfo from "../components/MovieInfo";


function MoviesPage(props) {

    return (
        <div style={{display: "flex", alignItems: 'center', flexDirection: 'column'}}>
            <Header/>
            <hr/>
            <Routes>
                <Route path={'/'} element={<MoviesList/>}/>
                <Route path={'movie'} element={<MoviesList/>}/>
                <Route path={'movie/:name/:id'} element={<MovieInfo/>}/>
            </Routes>
        </div>
    );
}

export default MoviesPage;