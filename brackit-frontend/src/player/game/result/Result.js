import React from "react";
import Card from "../../../shared/Card/Card";

import './Result.css';

const Result = (props) => {
  return (
    <Card className="result-display">
      <h2 style={(props.correct ? {color: "darkgreen"} : {color: "red"})}>{(props.correct ? "Correct!" : "Incorrect")}</h2>
      <h2>+{props.questionScore}</h2>
      <button className="next-question-button" onClick={props.onClick}>
        Next Question
      </button>
    </Card>
  );
};

export default Result;
