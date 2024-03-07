import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import './styles.css';

export default function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    if (getCurrentIndex > 0) {
      setHover(getCurrentIndex);
    }
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

StarRating.propTypes = {
  noOfStars: PropTypes.number.isRequired,
};
