import React, {useState} from 'react';

import classes from './GenreList.module.css'

const GenreList = (props) => {
    const [blockSize, setBlockSize] = useState(false);

    return (
        <div className={classes.list} onClick={e => setBlockSize(!blockSize)}>
            <div className={classes.name}>
                <div className={classes.title}>
                    <h4>Genre</h4>
                </div>
                <div className={classes.arrow}>

                </div>
            </div>
            <div className={[classes.genreList].join(' ')}>
                <ul>
                    <li>Action</li>
                    <li>RPG</li>
                    <li>Arcade</li>
                    <li>Indie</li>
                    <li>Horror</li>
                </ul>
            </div>
        </div>
    );
};

export default GenreList;