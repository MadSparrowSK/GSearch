import React from 'react';

import classes from './MiniGame.module.css'

const MiniGame = ({game}) => {

    return (
        <div className={classes.gameBlock}>
            <div className={classes.image}>
                <img src={game.background_image} alt='image'/>
            </div>
            <div className={classes.info}>
                <div className={classes.topInfo}>
                    <div className={classes.rating}>
                        <p>{game.metacritic}</p>
                    </div>
                    <div className={classes.name}>
                        <h3>{game.name}</h3>
                    </div>
                </div>
                <div className={classes.middleInfo}>

                </div>
                <div className={classes.bottomInfo}>

                </div>
            </div>
        </div>
    );
};

export default MiniGame;