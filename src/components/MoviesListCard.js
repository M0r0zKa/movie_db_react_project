import React from 'react';

function MoviesListCard({value}) {



    return (<div
        style={{
        width: '19%',
        height: '95%',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        marginLeft:'7px',
        fontSize:'10px',
        textAlign:'center',
        background:'rgba(205, 214, 219, 0.3)',
    }}>
        <img width={'95%'} height={'300px'} src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}/>
        <span style={{margin:'0px', width:'100%', height:'10%'}}>{value.title}</span>


    </div>);
}

export default MoviesListCard;