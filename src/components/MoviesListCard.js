import React from 'react';

function MoviesListCard({movie}) {


    return (<div style={{width: '250px', border:'solid 1px black', marginTop:'5px', background:'black', color:'white', display:'flex',
         flexDirection:'column', alignItems:'center'}}>
            <p>{movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>

        </div>);
}

export default MoviesListCard;