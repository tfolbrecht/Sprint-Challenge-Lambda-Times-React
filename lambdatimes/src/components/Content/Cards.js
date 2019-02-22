import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  // console.log(props)
  return (
    <div className="cards-container">
    	{props.cards.map( card => {
    		return (
    			<Card key={card.headline} cards = {card}/> 
    		)
    	})}    	
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;