import React, {useEffect, useState} from 'react';
import {MoviesListCard} from "../index";


function GenresTopBlock({genre}) {
    const [topGenre, setTopGenre] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=949e143f769d41b678bb117fb5ce5494&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}&with_watch_monetization_types=flatrate`)
            .then(res => res.json())
            .then(value => {
                setTopGenre(value.results)
            })
    }, [])

    const name = genre.name.charAt(0).toUpperCase() + genre.name.slice(1)
    return (<div style={{
        height: '400px',
        width: '100%',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        margin: 'opx',
    }}>
        <h2 style={{margin: '0px', marginLeft: '10px', marginBottom:'3px'}}>{name}</h2>
        <div style={{
            height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center',
        }}>
            {topGenre.map((value, index) => {
                if (index <= 5) {
                    return <MoviesListCard key={value.id} value={value}/>
                }
            })}

        </div>

    </div>);
}

export default GenresTopBlock;