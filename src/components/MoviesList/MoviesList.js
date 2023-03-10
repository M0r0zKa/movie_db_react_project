import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";


import {Link} from "react-router-dom";
import {Carousel, GenresTopBlock} from "../index";

function MoviesList() {

    const {genres} = useSelector(state => state.movie)

    const [carousel, setCarousel] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=949e143f769d41b678bb117fb5ce5494&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(res => res.json())
            .then(movie => setCarousel(movie.results))

    }, [])


    return (
        <div style={{width:'1280px'}}>
            <Carousel>
                {carousel.map(item => <Link to={`/movie/${item.title}/${item.id}`} style={{textDecoration: 'none',}}>
                    <div
                        className={'item'}
                        style={{
                            display: "flex",
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                            backgroundSize: '100%',
                            backgroundPosition: '95% 20%',
                            height: "100%",
                            minWidth: "1280px",
                            maxWidth: '1280px',
                            alignItems: 'end',
                            color: 'white',
                            fontSize: '50px',
                        }}><h3 style={{background: 'black', opacity: '.6'}}>{item.title}</h3></div>
                </Link>)}
            </Carousel>
            <div style={{width: '90%', display: "flex", flexWrap: 'wrap', flexDirection: 'column',  alignItems: "center",
                justifyContent: "center"}}>
                {
                    genres.map(genre => <GenresTopBlock key={genre.id} genre={genre}/>)
                }
            </div>
        </div>

    );
}

export default MoviesList;