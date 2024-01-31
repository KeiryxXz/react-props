import React from "react";
import PlayersList from "./components/PlayersList";
import "./App.css";
const App = () => {
    return (
       <div>
        <h1 className="title">Players List</h1>
        <PlayersList />
       </div>
    )
}

export default App;