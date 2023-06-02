import React, {FC} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {SubmitHandler, useForm} from "react-hook-form";

import {moviesActions} from "../../redux";
import {joiTitle} from "../../validators";
import css from './search.form.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";

interface ITitle {
    title: string;
    page: string;
}

const SearchForm: FC = () => {
    const {register, handleSubmit, reset, formState: { isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(joiTitle)
    })
    const dispatch = useAppDispatch();

    const {toggle} = useAppSelector(state => state.moviesReducer);

    const dark = toggle ? `${css.Dark}` : css.White;

    const search: SubmitHandler<ITitle> = ({title}) => {
        dispatch(moviesActions.search(title));
        reset();
    }

    return (
        <div>
            <form className="input-group mb-3" onSubmit={handleSubmit(search)}>
                <input type="text" className={`form-control ${dark}`}
                       placeholder={'Search movie'} aria-label="Recipient's username"
                       aria-describedby="button-addon2"{...register('title')} />
                <button disabled={!isValid} className="btn btn-outline-secondary" id="button-addon2">search</button>
            </form>
        </div>
    );
};

export {
    SearchForm
};