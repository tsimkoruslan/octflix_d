import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {Paginator} from "../Paginator";
import {SearchForm} from "../SearchForm";
import {GenresList} from "../GenresList";
import {moviesActions} from "../../redux";
import {MovieListCard} from "../MovieListCard";
import css from './all.movies.list.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";

const AllMoviesList: FC = () => {
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams();
    const {movies, toggle} = useAppSelector(state => state.moviesReducer);


    useEffect(() => {
        dispatch(moviesActions.getMovies(+query.get('page')));
    }, [dispatch, query]);

    const dark = toggle ? `${css.Dark}`: css.White;

    return (
        <div className={`${css.Main}  ${dark}`}>
            <div className={css.SearchBar}><SearchForm/></div>
            <div className={css.GenresList}><GenresList/></div>
            <div className={`row row-cols-1 row-cols-md-5 g-4`}>
                    {
                        !movies ? <div>Loading ... </div>
                    :
                    movies.results.map((movie) => (<MovieListCard key={movie.id} movie={movie}/>))
                    }
            </div>
            <div><Paginator/></div>
        </div>
    );
};

export {
    AllMoviesList
};