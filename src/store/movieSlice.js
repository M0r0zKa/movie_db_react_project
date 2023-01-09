import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
    'movie/getMovies ',
    async function (_, {rejectWithValue}) {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=949e143f769d41b678bb117fb5ce5494&language=ru&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate')
        const data = await response.json()
        return data.results;
    }
)
export const getGenres = createAsyncThunk(
    'movie/getGenres',
    async function () {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=949e143f769d41b678bb117fb5ce5494&language=ru-RU')
        const data = await response.json()
        console.log(data.genres);
        return data.genres
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movie: [],
        genres: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.status = 'Loading';
            state.error = null;
            console.log(state.movie);
        },
        [getMovies.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.movie = action.payload
            console.log(state.movie);
        },
        [getGenres.fulfilled]: (state, action) => {
            state.genres = action.payload
        },
    }
})

export default movieSlice.reducer
