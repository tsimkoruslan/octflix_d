import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './paginator.module.css';
import {useAppSelector} from "../../hooks";

const Paginator: FC = () => {

    const {toggle} = useAppSelector(state => state.moviesReducer);

    const dark = toggle ? `${css.Dark}`: css.White;

    const [query, setQuery] = useSearchParams({page:'1'});
    const prev = () => {
        setQuery(prev1 =>({...prev1, page: +prev1.get('page') - 1}));
    }
    const next = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}));
    }

    return (
        <div className={`btn-group ${css.Paginator}`} role="group" aria-label="Basic example"  >
            <button type="button" className={`btn btn-outline-secondary ${dark}`} disabled={+query.get('page') <= 1} onClick={prev}>prev</button>
            <button type="button" className={`btn btn-outline-secondary ${dark}`} disabled={+query.get('page') >= 500} onClick={next}>next</button>
        </div>
    );
};

export {
    Paginator
};