import React from 'react';
import {Link} from "react-router-dom";

import css from './logo.module.css';
import logo from '../../../assets/images/logo/icons8-movie-100.png';

const Logo = () => {
    return (
        <div>
            <Link to={'welcome'}><img className={css.Logo} src={logo} alt={'octfix'}/></Link>
        </div>
    );
};

export {
    Logo
};