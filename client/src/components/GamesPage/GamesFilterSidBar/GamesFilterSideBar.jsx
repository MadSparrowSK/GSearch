import React from 'react';

import classes from './GamesFilterSideBar.module.css'
import GenreList from "./GenreList/GenreList";

const GamesFilterSideBar = () => {
    return (
        <div>
            <div className={classes.sideBar}>
                <GenreList/>
            </div>
        </div>
    );
};

export default GamesFilterSideBar;