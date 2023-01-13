import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header, MovieInfo, MoviesList} from "../components";
import MoviePage from "./MoviePage";




function HomePage(props) {

    return (<div style={{display: "flex", alignItems: 'center', flexDirection: 'column'}}>
        <Header/>
        <hr/>
        <Routes path={'/'} element={<Header/>}>
            <Route index element={<MoviesList/>}/>
            <Route path={'movie'} element={<MoviePage/>}/>
            <Route path={'movie/:name/:id'} element={<MovieInfo/>}/>
        </Routes>
    </div>);
}

export default HomePage;