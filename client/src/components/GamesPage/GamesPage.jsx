import React, {useEffect, useState} from 'react';

import classes from './GamesPage.module.css'
import GamesFilterSideBar from "./GamesFilterSidBar/GamesFilterSideBar";
import {GamesServices} from "../../API/GamesServices";
import GamesList from "./GamesList/GamesList";

const GamesPage = () => {
    const [gamesList, setGamesList] = useState([])

    useEffect(async () => {
        await FetchGames();
    }, [])

    async function FetchGames() {
        const response = await GamesServices.GetAllGames();
        const data = await response.data;
        const games = await data.data;
        setGamesList([...games])
    }

    return (
        <div className={[classes.gamesPage, 'container'].join(' ')}>
            <GamesFilterSideBar />
            <GamesList games={gamesList}/>
        </div>
    );
};

export default GamesPage;