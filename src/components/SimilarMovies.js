import React, {useEffect, useState} from 'react';
import MoviesListCard from "./MoviesListCard";

function SimilarMovies({id}) {
    const [similarMovies, setSimilarMovies] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=949e143f769d41b678bb117fb5ce5494&language=ru&page=1`)
            .then(res => res.json())
            .then(value => setSimilarMovies(value.results))
    },[id])

    return (
        <div>
            <h3> Смотреть ещё</h3>
            <div style={{
                height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center',
            }}>
                {similarMovies.map((value, index) => {
                    if (index <= 4) {
                        return <MoviesListCard value={value}/>
                    }
                })}

            </div>
        </div>
    );
}

export default SimilarMovies;