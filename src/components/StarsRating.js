import React, {useEffect, useState} from 'react';
import {Rating} from "@mui/material";

function StarsRating({rating}) {

    return (
        <div>
            <Rating key={rating} name="half-rating" defaultValue={5 * (rating / 10)} precision={0.5} readOnly/>
        </div>
    );
}

export default StarsRating;