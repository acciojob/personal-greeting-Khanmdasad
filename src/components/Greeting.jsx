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
      {name && <h2>Hello, {name}!</h2>} 
    </div>
  );
};

export default Greeting;
