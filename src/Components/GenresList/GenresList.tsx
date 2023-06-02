import React, {useEffect} from 'react';

import {GenreCard} from "../GenreCard";
import css from './genre.list.module.css';
import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";

const GenresList = () => {
    const dispatch = useAppDispatch();
    const {genres, arrIdGenres, toggle} = useAppSelector(state => state.moviesReducer);

    const dark = toggle ? `${css.Dark}`: css.White;

    useEffect(() => {
        dispatch(moviesActions.getGenres());
    }, [dispatch])

    useEffect(()=>{
        dispatch(moviesActions.getMoviesByGenre(arrIdGenres.toString()));
    },[dispatch, arrIdGenres])

    const reset = () => {
      dispatch(moviesActions.pushIdGenres([]));
    }

    return (
        <div className={css.ButtonPosition}>
            <div className={css.Flex} >
                {!genres ?
                    <div>Loading ... </div>
                :
                genres.genres.map(genre => <GenreCard key={genre.id} genre={genre}/>)
            }
            </div>
            <div>
                <button type="button" className={`btn btn-outline-secondary ${dark}`} onClick={reset} >Reset Genre</button>
            </div>

        </div>
    );
};

export {
    GenresList
};