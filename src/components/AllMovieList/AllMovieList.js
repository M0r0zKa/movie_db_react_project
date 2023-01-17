import React from 'react';
import {MoviesListCard} from "../index";


function AllMovieList({movie}) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap:'wrap'
        }}>
            {
                movie.map(item => <MoviesListCard key={item.id} value={item}/>)
            }
        </div>
    );
}

export default AllMovieList;