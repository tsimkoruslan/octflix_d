import React, {FC} from 'react';

import {moviesActions} from "../../redux";
import css from './genre.card.module.css';
import {InfoGenre} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";


interface IProps {
    genre: InfoGenre;
}

const GenreCard: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();

    const {name, id} = genre;
    const {arrIdGenres, toggle} = useAppSelector(state => state.moviesReducer);
    const dark = toggle ? `${css.Dark}`: css.White;
    const push =  () => {
        const updatedGenres = [...arrIdGenres, id.toString()];

        dispatch(moviesActions.pushIdGenres(updatedGenres));
        dispatch(moviesActions.getMoviesByGenre(updatedGenres.toString()));
    }
    function disabledFunc(arrId, id:string) {
        return arrId.includes(id.toString());
    }

    const disabled = disabledFunc(arrIdGenres, id.toString());

    return (
        <div>
            <button disabled={disabled} type="button" className={`btn btn-outline-secondary ${dark} `} onClick={push}>{name}</button>
        </div>
    );
};

export {
    GenreCard
};