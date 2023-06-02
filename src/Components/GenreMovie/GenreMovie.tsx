import React from 'react';

import css from './genre.movie.module.css'
import {useAppSelector} from "../../hooks";
import {MovieListCard} from "../MovieListCard";

const GenreMovie = () => {

    const {movies, toggle} = useAppSelector(state => state.moviesReducer);
    const arr = movies?.results;

    const dark = toggle ? `${css.Dark} ${css.Main}`:` ${css.White } ${css.Main}`;
    return (
            <div className={dark}>
                <div className={css.Text}>Movies of the same genre ↓</div>
                <div className={`row row-cols- row-cols-md-5 g-4 `}>
                    { ! arr ? <div>Loading...</div> :
                        arr.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
                    }
                </div>
            </div>
    );
};

export {
    GenreMovie
};