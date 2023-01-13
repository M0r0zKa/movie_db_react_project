import { StarsRating} from "../index";


function MovieInfoCard({movieInfo}) {

    return (

        <div style={{
            display: "flex",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`,
            backgroundSize: '100%',
            width: '100%',
            height: '300px',
            backgroundPosition: '95% 20%',
            flexWrap: 'wrap',
            position: 'relative'

        }}>
            <div style={{
                display: 'flex',
                background: 'rgba(0, 0, 0, .6)',
                width: "100%",
                height: "70%",
                position: 'absolute',
                bottom: '1%',
                justifyContent: 'space-between',
                color: 'white',
                flexWrap: 'nowrap'
            }}>
                <img style={{marginLeft: '1%'}} src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={'dsa'}/>
                <div style={{width: '70%', marginTop: '-20px'}}>
                    <h3 style={{marginBottom: '0px'}}>{movieInfo.title}</h3>
                    <p style={{marginTop: '5px'}}>Дата релиза: {movieInfo.release_date}</p>
                    <span><h3>Обзор</h3><p style={{margin: '2px'}}>{movieInfo.overview} </p></span>
                </div>
                {
                    <StarsRating key={movieInfo.vote_average} rating={movieInfo.vote_average}/>
                }
            </div>
        </div>
    );
}

export default MovieInfoCard;