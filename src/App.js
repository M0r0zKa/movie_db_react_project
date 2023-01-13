import React, {useEffect} from 'react';
import HomePage from "./pages/HomePage";
import {useDispatch } from "react-redux";
import {getGenres, getMovies} from "./store/movieSlice";

function App(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMovies())
        dispatch(getGenres())
    },[dispatch])
    return (
        <div>
<HomePage/>
        </div>
    );
}

export default App;