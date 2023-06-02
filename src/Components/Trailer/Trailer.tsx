import React from 'react';

import css from "./tariler.module.css";
import {useAppSelector} from "../../hooks";

const Trailer = () => {
    const {videos} = useAppSelector(state => state.moviesReducer);

    return (
        <div className={css.Positions} >
            <iframe className={css.Trailer}
                src={`https://www.youtube.com/embed/${videos && videos.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export {
    Trailer
};