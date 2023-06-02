import React, {FC, useEffect} from 'react';

import css from './switcher.module.css';
import {moviesActions} from "../../../redux";
import {useAppDispatch, useAppSelector} from "../../../hooks";

const Switcher: FC = () => {
    const {toggle} = useAppSelector(state => state.moviesReducer)

    const dispatch = useAppDispatch();

    const toggleFunc = (): void => {
        const switcher = localStorage.getItem('switcher')
        const newSwitcher = switcher === 'false' ? 'true' : 'false';
        localStorage.setItem('switcher', newSwitcher);
        dispatch(moviesActions.switcher())
    };

    useEffect(() => {
        const switcher = localStorage.getItem('switcher');
        if (switcher !== 'false') {
            dispatch(moviesActions.switcher());
        }
    }, [dispatch]);


    return (
        <div className={css.Switcher}>
            <span className={css.Margin}>☀</span>
            <div className="form-check form-switch">
                <input checked={toggle} onChange={toggleFunc} className="form-check-input" type="checkbox"
                       role="switch"
                       id="flexSwitchCheckDefault"/>
            </div>
            <span className={css.Margin}>☾</span>
        </div>
    );
};

export {
    Switcher
};