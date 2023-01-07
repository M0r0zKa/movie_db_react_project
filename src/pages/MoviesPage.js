import React from 'react';
import Header from "../components/Header";
import {Route, Routes} from "react-router-dom";
import MoviesList from "../components/MoviesList";


function MoviesPage(props) {

    return (
        <div>
            <Header/>
            <hr/>
            <Routes>
                    <Route path={'/'} element={<MoviesList/>}/>
            </Routes>
        </div>
    );
}

export default MoviesPage;