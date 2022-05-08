import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const buttonHandler = () => props.query( text);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className = 'inputForm'
        placeholder="What you want to add to list?"
      />
      <button onClick={buttonHandler}>Add</button>
    </div>
  );
};

export default TextForm;
