import React from 'react';
import classes from "./PostsSideBar.module.css";

const PostsSideBar = ({findGears, findGames}) => {

    return (
        <div>
            <div className={classes.postsSideBar}>
                <div className={classes.postsNavBar}>
                    <ul>
                        <li>Hot News</li>
                        <li onClick={findGears}>Gears</li>
                        <li onClick={findGames}>Games News</li>
                        <li>Games Memes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PostsSideBar;