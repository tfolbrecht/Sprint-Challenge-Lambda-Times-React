import React from 'react';
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cards.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cards.img} alt={`Puppy Profile`}/>
        </div>
        <span>By {props.cards.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  Cards: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    imm: PropTypes.string,
    author: PropTypes.string
  })
}


export default Card;
