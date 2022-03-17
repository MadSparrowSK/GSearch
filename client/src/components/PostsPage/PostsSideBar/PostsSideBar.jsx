import React, {useState} from 'react';
import classes from "./PostsSideBar.module.css";

const PostsSideBar = ({findGears, findGames, findMemes, hotNews, unsubscribeHotPost}) => {

    const [isActiveHot, setActiveHot] = useState(false)
    const [isActiveGears, setActiveGears] = useState(false)
    const [isActiveGames, setActiveGames] = useState(false)
    const [isActiveMeme, setActiveMeme] = useState(false)

    const hot = () => {
        unsubscribeHotPost();
        hotNews();

        setActiveGears(false);
        setActiveGames(false);
        setActiveMeme(false);
        setActiveHot(true);
    }
    const gears = () => {
        unsubscribeHotPost();
        findGears();

        setActiveGears(true);
        setActiveGames(false);
        setActiveMeme(false);
        setActiveHot(false);
    }
    const games = () => {
        unsubscribeHotPost();
        findGames();

        setActiveGears(false);
        setActiveGames(true);
        setActiveMeme(false);
        setActiveHot(false);
    }
    const memes = () => {
        unsubscribeHotPost();
        findMemes();

        setActiveGears(false);
        setActiveGames(false);
        setActiveMeme(true);
        setActiveHot(false);
    }

    return (
        <div>
            <div className={classes.postsSideBar}>
                <div className={classes.postsNavBar}>
                    <ul>
                        <li className={isActiveHot ? classes.active : ''} onClick={hot}>Hot News</li>
                        <li className={isActiveGears ? classes.active : ''} onClick={gears}>Gears</li>
                        <li className={isActiveGames ? classes.active : ''} onClick={games}>Games News</li>
                        <li className={isActiveMeme ? classes.active : ''} onClick={memes}>Memes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PostsSideBar;