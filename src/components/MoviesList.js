import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import MoviesListCard from "./MoviesListCard";
import GenresTopBlock from "./GenresTopBlock";

function MoviesList(props) {

    const {movie, genres} = useSelector(state => state.movie)



    return (
        <div style={{width:'90%',display:"flex", flexWrap:'wrap', flexDirection:'column'}}>
            {
                genres.map(genre => <GenresTopBlock key={genre.id} genre={genre}/>)
            }
        </div>
    );
}

export default MoviesList;