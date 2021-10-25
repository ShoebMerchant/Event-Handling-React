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
    const { name, value } = event.target;
    setContact(prevValue => ({ ...prevValue, [name]: value }));
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
