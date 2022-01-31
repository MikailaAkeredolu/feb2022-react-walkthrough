import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css';
/*
    give the diet data a little flair by converting the text to an emoji.
     You can do this by converting the data in your component.
*/
// create a function inside the component that converts the text to an emoji


function convertFood(food) {
  switch(food) {
    case 'insects':
      return '🐜';
    case 'meat':
      return '🍖';
    case 'plants':
    default:
      return '🌱';
  }
}


//loop over the diet and convert the string to an emoji using the switch statement.

export default function AnimalDetails({ dietDetails, scientificName, dummyDetails }) {
  return(
    <div className="details">
      <h4>Details:</h4>
      <div>
        Scientific Name: {scientificName}.
      </div>
      <div>
        Diet: {dietDetails.map(food => convertFood(food)).join(' ')}
      </div>
      <h4>dDetails: {dummyDetails}</h4>
    </div>
  )
}



// The AnimalDetails.propTypes object sets up the function to take a prop of diet that is an array of strings
AnimalDetails.propTypes = {
    dietDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
}