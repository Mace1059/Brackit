import React, { useEffect, useState } from "react";

import "./Input.css";

const Input = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    props.onChange(input);
  }, [input])

  return (
    <div>
      <label>
        {props.label}
        <input
          className="input"
          placeholder={props.placeholder}
          type="textarea"
          value={input}
          onChange={(e) => changeHandler(e)}
        />
      </label>
    </div>
  );
};

export default Input;
