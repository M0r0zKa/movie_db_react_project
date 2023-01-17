import React, {useEffect, } from 'react';
import AllMovieList from "../components/AllMovieList/AllMovieList";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../store/movieSlice";
import {Link, useParams} from "react-router-dom";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";


function MoviePage() {
    const dispatch = useDispatch()
    const {page} = useParams()
    // const {input, setInput} = useState({pages: page})


    const {movie} = useSelector(state => state.movie)


    useEffect(() => {
        dispatch(getMovies(page))
    }, [page])

    // const submit = (e) => {
    //     e.preventDefault()
    //     console.log(e);
    // }

    const down = (pag) => {
            return pag - 1
    }
    const up = (pag) => {
        return ++pag
    }


    return (
        <div>
            <div style={{background: "black", width: "1280px", height: '400px'}}>

            </div>
            <div style={{background: "black", width: "1280px", height: '100px', marginTop: '10px'}}>

            </div>
            <div style={{width: "1280px", marginTop: '10px', display: 'flex', justifyContent: "space-between"}}>

                <div style={{background: "white", width: "270px", height: '600px'}}>

                </div>
                <div style={{
                    width: "1100px",
                    height: '1250px',
                    marginLeft: '10px',

                }}>
                    <AllMovieList movie={movie.results}/>
                </div>

            </div>

            <div style={{display: "flex", justifyContent: "center", width: '1280px', height: '30px'}}>
                <Link onClick={() => {
                    down(page)
                }} to={`/movie/page/${down(page)}`}>
                    {
                        <FaChevronLeft style={{fontSize: "25px"}} className={'arrow arrow-left'}/>
                    }
                </Link>
                {/*<form onChange={(e)=>{*/}
                {/*    submit(e)}}>*/}
                {/*    <input value={input.pages}  style={{fontSize:"25px"}}/>*/}
                {/*</form>*/}
                <Link onClick={() => {
                    up(page)
                }} to={`/movie/page/${up(page)}`}>
                    {
                        <FaChevronRight style={{fontSize: "25px"}}/>
                    }
                </Link>
            </div>

        </div>
    );
}

export default MoviePage;