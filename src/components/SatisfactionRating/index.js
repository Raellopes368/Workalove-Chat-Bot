import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './styles.css';

function SatisfactionRating({ selected, handleSelected }) {
  const levelStars = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ];

  const [hoverRating, setHoverRating] = useState(5);

  function handleHover(value) {
    setHoverRating(value);
  }
  function handleLeave() {
    setHoverRating(selected);
  }

  return (
    <div className="ratingBar">
      {levelStars.map((star) => (
        <div key={star.value}>
          {selected >= star.value || hoverRating >= star.value ? (
            <AiFillStar
              size={25}
              color="#e8ca31"
              onClick={() => handleSelected(star.value)}
              onMouseEnter={() => handleHover(star.value)}
              onMouseLeave={() => handleLeave()}
            />
          ) : (
            <AiOutlineStar
              size={25}
              color="#e8ca31"
              onClick={() => handleSelected(star.value)}
              onMouseEnter={() => handleHover(star.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

SatisfactionRating.propTypes = {
  handleSelected: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default SatisfactionRating;
