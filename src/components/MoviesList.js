import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import MoviesListCard from "./MoviesListCard";

function MoviesList(props) {

    const {movie} = useSelector(state => state.movie)


    return (
        <div style={{display:"flex", flexWrap:'wrap', justifyContent:'space-evenly'}}>
            {
                movie.map(movie =>  <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
}

export default MoviesList;