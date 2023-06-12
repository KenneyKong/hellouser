import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")

  const [showWelcome, setShowWelcome] = useState(false)


const handleFirstNameChange = (event) => {
  setName(event.target.value)
}

const handleLastNameChange = (event) => {
  setLastName(event.target.value)
}

const handleFormSubmit = (event) => {
  event.preventDefault()
  setShowWelcome(true)
}

  return (
    <div className="App">
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={name} onChange={handleFirstNameChange} placeholder="First Name" />
          <input type="text" value={lastName} onChange={handleLastNameChange}placeholder="Last Name" />
          <button type="submit">Submit</button>
        </form>
          <br />
          <br />

        {showWelcome && (
         <h1>Hello, {name} {lastName}!</h1>
        )}
    </div>
  );
}

export default App;
