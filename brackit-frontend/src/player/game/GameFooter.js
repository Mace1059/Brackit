import React from "react";

import './GameFooter.css';

const GameFooter = (props) => {
    return <footer className="game-footer">{props.children}</footer>
}

export default GameFooter;