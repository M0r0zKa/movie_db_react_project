import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchMovie = createAsyncThunk(
    'movie/fetchMovie',
    async function (_, {rejectWithValue}) {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=949e143f769d41b678bb117fb5ce5494&language=ru&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate')
        const data = await response.json()
        return data.results;
    }
)

 const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movie: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchMovie.pending]: (state, action) => {
            state.status = 'Loading';
            state.error = null;
            console.log(state.movie);
        },
        [fetchMovie.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.movie = action.payload
            console.log(state.movie);
        },
    }
})

export default movieSlice.reducer
