import React, { useState } from 'react';
import heart from './images/Path.svg';

import './Animal.css';

const Animal = ({ image }) => {
  const [levelOfLove, setLevelOfLove] = useState(0);

  const giveMoreLove = () => {
    levelOfLove > 3 ? setLevelOfLove(0) : setLevelOfLove((prev) => prev + 1);
  };

  return (
    <div className="imgBox">
      <img onClick={giveMoreLove} style={{ width: '200px' }} src={image} />
      {levelOfLove !== 0 ? (
        <img
          src={heart}
          className={`position ${
            levelOfLove !== 0 ? 'level' + levelOfLove : ''
          }`}
          onClick={giveMoreLove}
        ></img>
      ) : null}
    </div>
  );
};

export default Animal;
