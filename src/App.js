import React, { useState } from 'react';
import Animal from './Animal';
import image1 from './images/animal1.png';
import image2 from './images/animal2.jpg';
import image3 from './images/animal3.jpg';

const App = () => {
  const [images, setImages] = useState([]);

  const imagesList = [image1, image2, image3];

  const handleClick = () => {
    const index = Math.floor(Math.random() * imagesList.length);
    setImages((prevState) => [...prevState, imagesList[index]]);
  };

  return (
    <div>
      <button style={{ display: 'block' }} onClick={handleClick}>
        Dodaj świeżaka
      </button>
      <Animal imagesList={images} />
    </div>
  );
};

export default App;
