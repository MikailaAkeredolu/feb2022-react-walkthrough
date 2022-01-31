import React from 'react';
import PropTypes from 'prop-types';
import '../Alert/Alert.css'
// children will allow you to display child components.
// <div class="alert-wrapper error"> same as {`alert-wrapper ${type}`}
export default function Alert({children, title, type}) {
    return (
        <div className={`alert-wrapper ${type}`}>  
          <h2>{title}</h2>
          {children}
        </div>
      )
}



Alert.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element), 
      PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }