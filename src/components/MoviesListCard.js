import React from 'react';
import {Link} from "react-router-dom";

function MoviesListCard({value}) {
    console.log(value);


    return (
        <div
            style={{
                width: '19%',
                height: '95%',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                marginLeft: '7px',
                fontSize: '10px',
                textAlign: 'center',
            }}>
            <img width={'200px'} height={'300px'} src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}/>
            <Link to={`movie/${value.id}`} style={{
                margin: '0px',
                width: '100%',
                height: '10%',
                textDecoration: 'none',
                color: 'black',
                fontSize: '14px',
                fontWeight:'900'
            }}>{value.title}</Link>


        </div>);
}

export default MoviesListCard;