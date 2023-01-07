import React, {useEffect} from 'react';
import MoviesPage from "./pages/MoviesPage";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "./store/movieSlice";

function App(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchMovie())

    },[dispatch])
    return (
        <div>
<MoviesPage/>
        </div>
    );
}

export default App;