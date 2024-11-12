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
      />

      <p> Hello {name}!</p> 
    </div>
  );
};

export default Greeting;
