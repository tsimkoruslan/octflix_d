import React, {FC} from 'react';

import {Switcher} from "./Switcher";
import {AvatarUser} from "./AvatarUser";
import css from './header.module.css'
import {Logo} from "./Logo";
import {HomeLink} from "./HomeLink";
import {useAppSelector} from "../../hooks";

const Header: FC = () => {
   const {toggle} = useAppSelector(state => state.moviesReducer);

    const dark = toggle ? `${css.Dark}`: css.White;

    return (
        <div className={`${css.Header} ${dark}`}>
            <Logo/>
            <Switcher/>
            <AvatarUser/>
            <HomeLink/>
        </div>
    );
};

export {
    Header
}