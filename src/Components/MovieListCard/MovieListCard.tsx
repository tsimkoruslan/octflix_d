import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {posterURL} from "../../constans";
import {IResults} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import css from './movi.list.card.module.css';
import empty from '../../assets/images/empty/Programmer - Blank Poster.jpeg';

interface IProps {
    movie: IResults;
}

const MovieListCard: FC<IProps> = ({movie}) => {
    const {toggle} = useAppSelector(state => state.moviesReducer);
    const {title, vote_average, poster_path, release_date} = movie;

    const dark = toggle ? `${css.Dark}`: css.White;

    const img = poster_path ? `${posterURL}${poster_path}` : `${empty}`;

    return (
        <Link className={`${css.Normalize}`} to={'/info'} state={{...movie}}>
            <div className={`card h-100 ${css.Position} ${css.Card} ${dark}`}>
                <div>
                    <img className="card-img-top" src={img} alt={title}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Release {release_date?.slice(0,4)} / Rating {vote_average} ★</p>
                </div>
            </div>
        </Link>
    );
};

export {
    MovieListCard
};