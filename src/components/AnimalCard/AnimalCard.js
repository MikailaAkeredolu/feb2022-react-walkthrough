import React from 'react';
import './AnimalCard.css'
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';

//Wrapper Component
/*
    you’ll have a parent component that can provide props to nested components without having to know what the props are. This will keep the parent component flexible, allowing you to update the child component without having to change the parent.
*/

export default function AnimalCard(props) {

    //destructure props
    const {additional,showAdditional, name, scientificName, size, diet, dummy } = props;  //Properties for this class

  return (

          <Card title="Animal" details={<em>Mammal</em>}>
                <h2>{name}</h2>
                {/* <h2>{props.name}</h2> */}
                <h4>{size}kg</h4>
                <h6>{dummy}</h6>
                <AnimalDetails
                    dietDetails={diet}
                    scientificName={scientificName}
                    dummyDetails = {dummy}
                />
                
                <button type="button" onClick={() => showAdditional(additional)}>More Info</button>
          </Card>
  
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