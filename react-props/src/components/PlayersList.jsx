import React from "react";
import players from "../players";
import Player from "../player";

function PlayersList () {
    return (
        <div>
            <div>
            {players.map((player, index) => (
                <Player key={index} {...player}></Player>
            ))}
            </div>
        </div>
    );
}

export default PlayersList;