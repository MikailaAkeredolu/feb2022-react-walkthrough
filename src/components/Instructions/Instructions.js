import emoji from './emoji.svg';
import './Instructions.css';

// convert class to functional component 
const Instructions = ()=> {
    return (

            <div className="instructions">
                <img src={emoji} alt="screenshot" />
                <p>Click on an emoji to view the short-name of the emoji</p>
            </div>
        )
}

export default Instructions;



// import React, { Component } from "react";
// export default class Instructions extends Component{
//     render(){

//         return(
//             <div className="instructions">
//                 <img src={emoji} alt="screenshot" />
//                 <p>Click on an emoji to view the shortname of the emoji</p>
//             </div>
//         )
//     }
// }