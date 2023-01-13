import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header, MovieInfo, MoviesList} from "../components";




function HomePage() {

    return (<div style={{display: "flex", alignItems: 'center', flexDirection: 'column'}}>
        <Header/>
        <hr/>
        <Routes>
            <Route path={'/'} element={<MoviesList/>}/>
            <Route path={'movie'} element={<MoviesList/>}/>
            <Route path={'movie/:name/:id'} element={<MovieInfo/>}/>
        </Routes>
    </div>);
}

export default HomePage;