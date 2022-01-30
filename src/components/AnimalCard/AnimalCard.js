import React from 'react';
import './AnimalCard.css'
import PropTypes from 'prop-types';


export default function AnimalCard(props) {

    const {additional,showAdditional, name, scientificName, size, diet } = props;  //Properties for this class

  return (
    <div className="animal-wrapper">
        <h2>{name}</h2>
        <h3>{scientificName}</h3>
        <h4>{size}kg</h4>
        <div>{diet.join(', ')}.</div>
        <button type="button" onClick={() => showAdditional(additional)}>More Info</button>
  </div>
  )
}

AnimalCard.propTypes = {
    additional: PropTypes.shape({
      link: PropTypes.string,
      notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
  }

  //default propType - use for Lion addtional property
  AnimalCard.defaultProps = {
    additional: {
      notes: 'No Additional Information'
    }
  }

  /*

  PropTypes act like other type systems by explicitly defining the type of data you expect to receive for a certain prop. They also give you the chance to define default data in cases where the prop is not always required. Unlike most type systems, PropTypes is a runtime check, so if the props do not match the type the code will still compile, but will also display a console error.
  */