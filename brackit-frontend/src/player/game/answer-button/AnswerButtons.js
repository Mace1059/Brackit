import React from "react";

import Card from "../../../shared/Card/Card";

import "./AnswerButton.css";

const AnswerButton = (props) => {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isCorrect, setIsCorrect] = useState(false);

  // useEffect(() => {
  //   props.onClick(isCorrect);
  // }, [isSubmitted]);

  // const submit = (isCorrect) => {
  //   setIsCorrect(isCorrect);
  //   setIsSubmitted(true);
  // };

  return (
    <Card className="answer-display">
      <h2 className="question-display">{props.question}</h2>
      <div className="answer-grid">
        {props.shuffledQuestionList.map((answer) => (
          <button
            className="answer-button"
            onClick={props.onClick}
            key={props.shuffledQuestionList.indexOf(answer)}
          >
            {answer.answer}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default AnswerButton;
