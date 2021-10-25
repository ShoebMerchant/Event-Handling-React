import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    fName: "",
    lName: "",
  });

  function handleClick(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    // console.log(name, value);
    /**
     * Do not use event inside setName() because
     * it's a synthetic event
     */
    setName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          type="text"
          onChange={handleChange}
          placeholder="What's your first name?"
          value={name.fName}
        />
        <input
          name="lName"
          type="text"
          onChange={handleChange}
          placeholder="What's your last name?"
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
