import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './home.link.module.css';
import {useAppSelector} from "../../../hooks";

const HomeLink: FC = () => {
    const {toggle} = useAppSelector(state => state.moviesReducer);

    const dark = toggle ? `${css.Dark}`: css.White;

    return (
        <>
            <Link className={css.Normalize}  to={'/movies?page=1'}>
                <button className={`btn btn-outline-secondary ${dark}`}>Home</button>
            </Link>
        </>
    );
};

export {
    HomeLink
};