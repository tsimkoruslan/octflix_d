import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import css from './main.module.css'
import {Header} from "../Components/Header/Header";


const MainLayout : FC = () => {
    return (
        <div className={css.Main}>
            <div className={css.HomePage}>
                <Header/>
            </div>
            <div>
                    <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout
};