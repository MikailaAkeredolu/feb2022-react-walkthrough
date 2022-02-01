import { useState, useReducer } from 'react';
import '../Pizza/Pizza.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  const pizzas = [
    {
      emoji: '🍦',
      name: 'ice cream',
      price: 5
    },
    {
      emoji: '🍩',
      name: 'donuts',
      price: 2.5,
    },
    {
      emoji: '🍉',
      name: 'watermelon',
      price: 4
    }
  ];

  function cartReducer(state, action) {
    switch(action.type) {
      case 'add':
        return [...state, action.pizza];
      case 'remove':
        const productIndex = state.findIndex(item => item.name === action.pizza.name);
        if(productIndex < 0) {
          return state;
        }
        const update = [...state];
        update.splice(productIndex, 1)
        return update
      default:
        return state;
    }
  }

//   function cartReducer(state, pizza){
//     return [...state, pizza];
// }
function totalReducer(state, action) {
    if(action.type === 'add'){
        return state + action.price;
    }
    return state - action.price
}

// function totalReducer(state, price) {
//     return state + price;
// }


export default function Pizza(){
//hooks with state
// const [cart, setCart] = useState([]); // By passing an empty array as an argument to useState, you set the initial empty state as the first value of cart.
//const [total, setTotal] = useState(0);

//reducer
const [cart, setCart] = useReducer(cartReducer, []);
// const [total, setTotal] = useReducer(totalReducer, 0);

function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions)
  }
  

    // function getTotal() {
    //     return total.toLocaleString(undefined, currencyOptions)
    // }

    //reducer
    function add(pizza) {
        setCart({ pizza, type: 'add' });
        // const {name, price} = pizza;
        // setCart({name, type: 'add'});
        // setTotal({price, type: 'add'});
    }

    function remove(pizza) {
        setCart({ pizza, type: 'remove' });
        // const { name, price } = product;
        // setCart({ name, type: 'remove' });
        // setTotal({ price, type: 'remove' });
      }


    // function add(pizza) {
    //     setCart(current => [...current, pizza.name]);
    //     setTotal(current => current + pizza.price);
    // }

    // function remove(pizza) {
    //     setCart(current => [...current, pizza.name]);
    //     setTotal(current => current + pizza.price);
    // }

    return (
        <div className="pizza-wrapper" style={{marginTop: '30px'}}>
            <div>
                Pizza Cart: {cart.length} total items
            </div>
            <div>Total : {getTotal(cart)}</div>

<div>
    {
            pizzas.map(pizza => (
            <div key={pizza.name}>
                <div className="pizza">
                    <span role="img" aria-label={pizza.name}>{pizza.emoji}</span>
                </div>
                <button onClick={()=> add(pizza)} style={{backgroundColor: "yellowgreen"}}>Add</button>
                <br />     <br />
                <button onClick={() => remove(pizza)}>Remove</button>
                {/* <button onClick={ ()=> {
                    setCart([]);
                    setTotal(0);
                }} style={{backgroundColor: "red"}}>Remove</button> */}
                                
        </div>
        ))
    }
    </div>
</div>
)}

// There’s another Hook called useReducer that is specially designed to update the state based on the current state, in a manner similar to the .reduce array method