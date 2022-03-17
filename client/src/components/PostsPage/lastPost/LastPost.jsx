import React from 'react';
import classes from "./lastPost.module.css";

const LastPost = (props) => {
    return (
        <div className={classes.lastNewsPost}>
            <div className={classes.lastNewsPhoto}>
                <img src="http://localhost:5000/4k.jpg" alt="image"/>
            </div>
            <div className={classes.lastNewsDescription}>
                <div className={classes.lastNewsTitle}>
                    <h3>Title</h3>
                </div>
                <div className={classes.lastNewsLittleDescription}>
                    <p>Description some text more text</p>
                </div>
            </div>
        </div>
    );
};

export default LastPost;