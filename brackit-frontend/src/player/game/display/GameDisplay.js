import React, { useState, useReducer } from "react";


import AnswerButton from "../answer-button/AnswerButtons";
import Result from "../result/Result";
import Timer from "../Timer/Timer";
import GameFooter from "../GameFooter";
import GameHeader from "../GameHeader";

import {socket} from '../../../shared/socket';

const SPEED_SCORE = 200;
const QUESTION_SCORE = 500;
let correct = true;
let startSpeedScore;

let scores = {
  speedScore: 0,
  totalQuestionScore: 0,
};
// =================================================================================

const shuffle = (array) => {
  // While there remain elements to shuffle.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// =================================================================================

const GameReducer = (state, action) => {
  switch (action.type) {
    case "RESULT":
      return {
        isResult: true,
      };
    case "QUESTION": {
      return { isResult: false };
    }
    default:
      return state;
  }
};


const speedScoreTimer = () => {
  clearInterval(startSpeedScore);
  scores.speedScore = SPEED_SCORE;
  setTimeout(
    () =>
      (startSpeedScore = setInterval(() => {
        scores.speedScore = scores.speedScore - 1;
        if (scores.speedScore <= 0) {
          clearInterval(startSpeedScore);
        }
      }, 50)),
    1000
  );
};

//
//
//
//
//
//
//
//
//
//

const GameDisplay = (props) => {
  const questionList = [
    {
      question: "Is JV the stinkiest man alive?",
      answers: [
        { answer: "Yes", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question: "What instrument does Will Balkan Play??",
      answers: [
        { answer: "Cello", isCorrect: false },
        { answer: "Piano", isCorrect: true },
        { answer: "Violin", isCorrect: true },
        { answer: "Flute", isCorrect: false },
      ],
    },
    {
      question: "What did Maddie Brady say to Nate?",
      answers: [
        { answer: "You so sexy", isCorrect: false },
        { answer: "Take me daddy", isCorrect: false },
        { answer: "Usually white boys can't handle me", isCorrect: true },
        { answer: "Your friend Jack Macy is cute", isCorrect: false },
      ],
    },
  ];

  //STATE
  const [currQuestion, setNextQuestion] = useState(0);

  const shuffledQuestionList = shuffle(questionList[currQuestion].answers);

  const [GameState, dispatch] = useReducer(GameReducer, {
    isResult: false,
  });
  const { isResult } = GameState;

  //========================================
  //Handlers for Reducer
  const resultHandler = () => {
    dispatch({ type: "RESULT" });
  };

  const questionHandler = () => {
    speedScoreTimer();
    dispatch({ type: "QUESTION" });
  };
  //========================================


  const handleAnswerClickEvent = (isCorrect) => {
    clearInterval(startSpeedScore);

    if (isCorrect) {
      correct = true;
      console.log(scores.speedScore)
      scores.totalQuestionScore = QUESTION_SCORE + scores.speedScore;
    } else {
      correct = false;
      scores.totalQuestionScore = 0;
    }
    socket.emit("answer_submit", {score: scores.totalQuestionScore, id: socket.id});


    resultHandler();
    setNextQuestion(
      currQuestion < questionList.length - 1 ? currQuestion + 1 : 0
    );
  };

  let display;
  if (!isResult) {
    display = (
      <AnswerButton
        shuffledQuestionList={shuffledQuestionList}
        question={questionList[currQuestion].question}
        onClick={handleAnswerClickEvent}
      />
    );
  }
  if (isResult) {
    display = (
      <Result
        correct={correct}
        onClick={questionHandler}
        questionScore={scores.totalQuestionScore}
      />
    );
  }

  return (
    <React.Fragment>
      <GameHeader score="0" message="Matchmaking in Progress!" grade="0/0"/>
      {display}
      <GameFooter>
        <Timer time={10} />
      </GameFooter>
    </React.Fragment>
  );
};

export default GameDisplay;
