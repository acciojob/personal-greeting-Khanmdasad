import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      {name && <p>Hello, {name}!</p>} {/* Changed <h2> to <p> */}
    </div>
  );
};

export default Greeting;
