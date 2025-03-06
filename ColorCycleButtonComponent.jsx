import React, { useState } from 'react';

const ColorCycleButton = ({ colors }) => {
  
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  
  const handleClick = () => {
    
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
  };

  
  const currentColor = colors[currentColorIndex];

  return (
    <button
      style={{
        backgroundColor: currentColor,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

export default ColorCycleButton;