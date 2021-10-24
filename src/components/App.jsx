import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  function handleClick(event) {
    setHeadingText("Submitted");
    setDisplayName(name);
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    const { value: newName } = event.target;
    setName(newName);
  }

  return (
    <div className="container">
      <h1>
        {headingText} {headingText === "Hello" ? " " : " by "}
        {displayName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: mouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
