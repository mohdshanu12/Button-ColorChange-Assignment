 import React, { useState } from 'react';

 const ColorChangingButton = () => {
  // State to keep track of the button color
  const [buttonColor, setButtonColor] = useState('blue');

  // Function to toggle the button color
  const handleButtonClick = () => {
    if (buttonColor === 'blue') {
      setButtonColor('red');
    } else {
      setButtonColor('blue');
    }
  };

  // Render the component with the conditional color
  return (
    <div class='container'>
      <button
        style={{
          width: '150px',
          height: '50px',
          fontSize: '20px',
      
          //border: 'darkmagenta',
          //alignItems:'center'
          backgroundColor: buttonColor,
          color: buttonColor === 'blue' ? 'white' : 'black', // Optional: Change text color based on background color
        }}
        onClick={handleButtonClick}
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorChangingButton;
