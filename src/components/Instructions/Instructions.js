import React, { Component } from "react";
import emoji from './emoji.svg';
import './Instructions.css';
// convert class to functional component 
export default class Instructions extends Component{
    render(){

        return(
            <div className="instructions">
                <img src={emoji} alt="screenshot" />
                <p>Click on an emoji to view the shortname of the emoji</p>
            </div>
        )
    }
}