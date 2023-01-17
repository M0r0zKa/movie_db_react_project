import React, {useMemo} from 'react';
import HomePage from "./pages/HomePage";
import {useDispatch } from "react-redux";
import {getGenres} from "./store/movieSlice";

function App() {

    const dispatch = useDispatch()
    useMemo(()=>{
        dispatch(getGenres())
    },[dispatch])
    return (
        <div>
<HomePage/>
        </div>
    );
}

export default App;