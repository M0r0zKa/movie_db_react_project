import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovieInfo} from "../store/movieSlice";
import {Rating} from "@mui/material";
import MoviesListCard from "./MoviesListCard";
import MovieInfoCard from "./MovieInfoCard";

function MovieInfo() {

    // const [genres, setGenres] = useState([])
    const {id} = useParams()


    const [movieInfo,setMovieInfo]  = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=949e143f769d41b678bb117fb5ce5494&language=ru-RU`)
            .then(res => res.json())
            .then(value => setMovieInfo([value]))

    }, [])
    console.log(movieInfo);

    return (<div style={{width: '90%', position: 'relative'}}>
        {
            movieInfo.map(value=><MovieInfoCard movieInfo={value}/>)
        }
        {

        }
    </div>);
}

export default MovieInfo;