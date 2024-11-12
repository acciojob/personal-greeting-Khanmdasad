import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');       // State for the user's name
  const [greeting, setGreeting] = useState(''); // State for the greeting message

  // Handle input change to update the name
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Handle button click to set the greeting message
  const handleGreet = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={handleGreet}>Greet</button>
      {greeting && <h2>{greeting}</h2>} {/* Display greeting only if it's set */}
    </div>
  );
};

export default Greeting;
