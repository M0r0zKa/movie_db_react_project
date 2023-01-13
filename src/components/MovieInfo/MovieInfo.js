import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Comments, MovieInfoCard, SimilarMovies} from "../index";

function MovieInfo() {

    const {id} = useParams()

    const [movieInfo, setMovieInfo] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=949e143f769d41b678bb117fb5ce5494&language=ru-RU`)
            .then(res => res.json())
            .then(value => setMovieInfo([value]))

    }, [id])

    return (<div style={{width: '90%', position: 'relative'}}>
        {
            movieInfo.map(value => <MovieInfoCard  movieInfo={value}/>)
        }
        {
            <SimilarMovies id={id}/>
        }
        {
            <Comments id={id}/>
        }
    </div>);
}

export default MovieInfo;