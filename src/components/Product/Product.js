import React, { Component } from 'react';
import './Product.css';

const products = [
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




export default class Product extends Component {
    //state
    state = {
        cart: [],
        total: 0
    }

    //updating state object's value with setState - used an arrow function to create the add method. As mentioned before, this will ensure the function has the proper this context when running the update.
    // you can add the new product to the state by using the spread syntax on the current value and adding the new value onto the end.
    add = (product) => {
        this.setState(state => ({
            cart: [...state.cart, product],
        }))
    }

    //Empty the cart but keep the price
    /*
    To avoid mutating the state object, you must first make a copy of it using the spread operator.
     Then you can splice out the item you want from the copy and return the copy in the new object.
     By copying state as the first step, you can be sure that you will not mutate the state object.

    */
    remove = (product) => {
        this.setState(state => {

          const cart =  [...state.cart]
          cart.splice(cart.indexOf(product.name))
          return({
              cart,
              total: state.total - product.price
          })

        })
      }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }

      getTotal = () => {
          // calculate the total using the reduce() array method.
          const total = this.state.cart.reduce((totalCost, item)=> totalCost + item.price, 0);
        return total.toLocaleString(undefined, this.currencyOptions)
      }




  render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: {this.state.cart.length} total items
        </div>
        <div>Total: {this.getTotal()}</div>

            <div>
                    {products.map(product => (
                            <div key={product.name}>
                                        <div className="product">
                                            <span role="img" aria-label={product.name}>
                                                {product.emoji}
                                            </span>
                                        <button onClick={() => this.add(product)}>Add</button> 
                                        <button onClick={() => this.remove(product)}>Remove</button>
                                        </div> 

                            </div>
                         
                    ))}
            </div>

      </div>
    )
  }
}