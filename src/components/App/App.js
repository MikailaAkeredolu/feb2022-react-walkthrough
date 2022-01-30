// import logo from './logo.svg';
import './App.css';
import Instructions from '../Instructions/Instructions.js';
import data from '../App/data';
import AnimalCard from '../AnimalCard/AnimalCard';


function displayEmojiName(event){
  alert(event.target.id);
}

const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];


function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};


function App() {
  const greeting = 'greeting';
  const displayAction =  false //"You see me if Truthy and don't if value is falsy"
 
  return (
    <div className="container">

     <h1 id={greeting}>Hello react</h1>
    {displayAction && <p>You see me now</p>}

    <Instructions />

     <ul>
       {
          emojis.map(emoji=>(
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role="img" id={emoji.name} aria-label={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
       }
     </ul>

      <div className="wrapper">
        <h1>Animals</h1>
                {
                  data.map(animal => (
                    <AnimalCard 
                        additional={animal.additional}
                        diet={animal.diet}
                        key={animal.name}
                        name={animal.name}
                        scientificName= {animal.scientificName}
                        size={animal.size}
                        showAdditional={showAdditional}
                    />
                  ))
                  
                }
      </div>

              

     </div>

  );
  
}



export default App;


/*
Each span has the role attribute set to the img role. 
This will signal to accessibility software that the element is acting like an image.

In addition, each <span> also has an aria-label and an id attribute with the name of the emoji. 
The aria-label will tell visitors with screen readers what is displayed

*/