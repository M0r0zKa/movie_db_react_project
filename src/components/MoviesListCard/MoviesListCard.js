import React, {useEffect, useMemo, useState} from 'react';
import {Link} from "react-router-dom";
import {StarsRating} from "../index";

function MoviesListCard({value}) {
    const [style, setStyle] = useState({
        backgroundImage: `url(https://image.tmdb.org/t/p/w200${value.poster_path})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        width: '200px',
        height: '300px',
        display: 'flex',
        overflow: "hidden",
        marginLeft: '2px',
        flexDirection: 'column',
        justifyContent: "space-between"
    })
    useMemo(()=>{
        const newStyle = {
            backgroundImage: `url(https://image.tmdb.org/t/p/w200${value.poster_path})`
        }
        setStyle({...style, ...newStyle})
    },[value])
    const [movieCardInfo, setMovieCardInfo] = useState(null)
    const onMouseOver = () => {
        const newStyle = {
            margin: '10px',
            boxShadow: "4px 4px 6px  rgba(0, 0, 0, .6)",
            height: '350px',
        }
        setStyle({...style, ...newStyle})
        setMovieCardInfo(true)
    }
    const onMouseOut = () => {
        const newStyle = {
            margin: '2px',
            boxShadow: 'unset',
            height: '300px'
        }
        setStyle({...style, ...newStyle})
        setMovieCardInfo(null)
    }
    return (

        <Link
            to={`/movie/${value.title}/${value.id}`} onMouseOver={() => {
            onMouseOver()
        }}
            onMouseOut={() => {
                onMouseOut()
            }}
            style={{
                display: "flex",
                flexDirection: "column",
                width: "auto",
                height: 'auto',
                textDecoration: 'none',
                color: 'black'
            }}
        >
            <div
                style={style}>
                <div style={{
                    background: 'rgba(0, 0, 0, .6)',
                    width: '100%',
                    height: '8%'
                }}>
                    <StarsRating rating={value.vote_average}/>
                </div>

                {
                    movieCardInfo && <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        width: "200px",
                        height: "50px",
                        justifyContent: 'center',
                        textAlign: 'center',
                        background: 'rgba(0, 0, 0, .6)',
                        color: 'white'
                    }}>
                        <h4>{value.title}</h4>

                    </div>

                }
            </div>

        </Link>

    )
}

export default MoviesListCard;