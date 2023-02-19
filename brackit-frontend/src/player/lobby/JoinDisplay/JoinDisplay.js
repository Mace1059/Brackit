import React, { useState } from "react";
import Card from "../../../shared/Card/Card";

import Input from "../../../shared/Input/Input";

import "./JoinDisplay.css";

const JoinDisplay = (props) => {
  const [input, setInput] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(input);
  };

  const inputHandler = (data) => {
    setInput(data);
  };

  return (
    <Card className="join-display">
      <form className="form" onSubmit={submitHandler}>
        <Input
          placeholder="Name"
          label="Name of a Future Champion"
          onChange={inputHandler}
        ></Input>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default JoinDisplay;
