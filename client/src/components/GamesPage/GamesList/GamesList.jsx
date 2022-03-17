import React from 'react';
import MiniGame from "./MiniGame/MiniGame";
import Loader from "../../Loader/Loader";


const GamesList = ({games}) => {

    return (
        <div>
            {
                games.length
                    ? games.map(game =>
                        <MiniGame game={game} key={game.id}/>
                    )
                    : <Loader />
            }
        </div>
    );
};

export default GamesList;