import React, { useState } from 'react';

import './Animal.module.css';

const Animal = ({ imagesList }) => {
  const [levelOfLove, setLevelOfLove] = useState(1);

  // const level =
  //   levelOfLove === 0
  //     ? `${styles.heart}`
  //     : `${styles.heart} ${styles.level[levelOfLove]}`;

  const giveMoreLove = () => {
    levelOfLove > 3 ? setLevelOfLove(0) : setLevelOfLove((prev) => prev + 1);
  };

  console.log(levelOfLove);
  return (
    <>
      {imagesList
        ? imagesList.map((image, index) => (
            <div key={index}>
              <img
                onClick={giveMoreLove}
                style={{ width: '200px' }}
                src={image}
              />
              <div className="heart">{levelOfLove}</div>
            </div>
          ))
        : null}
    </>
  );
};

export default Animal;
