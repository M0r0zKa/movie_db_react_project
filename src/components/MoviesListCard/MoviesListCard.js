import React, { useMemo, useState} from 'react';
import {Link} from "react-router-dom";
import {StarsRating} from "../index";

function MoviesListCard({value}) {
    const [style, setStyle] = useState({
        backgroundImage: `url(https://image.tmdb.org/t/p/w300${value.poster_path})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        width: '200px',
        height: '300px',
        display: 'flex',
        overflow: "hidden",
        position:"relative",
        marginTop:'5px'
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
            boxShadow: "4px 4px 6px  rgba(0, 0, 0, .5)",
        }
        setStyle({...style, ...newStyle})
        setMovieCardInfo(true)
    }
    const onMouseOut = () => {
        const newStyle = {
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
                justifyContent:"space-evenly",
                width: "auto",
                height: 'auto',
                textDecoration: 'none',
                color: 'black'
            }}
        >
            <div
                style={style}>
                <div style={{
                    background: 'rgba(0, 0, 0, .3)',
                    width: '100%',
                    height: '8%',
                }}>
                    <StarsRating rating={value.vote_average}/>
                    {
                        movieCardInfo && <div style={{

                            flexWrap: 'wrap',
                            width: "200px",
                            height: "45px",
                            justifyContent: 'center',
                            textAlign: 'center',
                            background: 'rgba(0, 0, 0, .6)',
                            color: 'white',
                        position:"absolute",
                        bottom:'0px'
                        }}>
                            <h4 style={{margin:"0px"}}>{value.title}</h4>
                        </div>

                    }
                </div>


            </div>

        </Link>

    )
}

export default MoviesListCard;