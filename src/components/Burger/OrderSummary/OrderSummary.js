import React, { Component } from 'react'

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

  //This could be a functional component, doesn't have to be a class
  componentWillUpdate() {
    console.log('[OrderSummary] Will Update')
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey} style={{textTransform: 'capitalize',
          justifyContent: 'center',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'}}>
            <span style={{textTransform: 'capitalize'}}>
              {igKey}
            </span>
            : {this.props.ingredients[igKey]}
          </li>
        )
      })
    return (
      <div style={{textAlign:"center"}}>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul style={{listStyleType: "none", display:"flex"}}>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </div>
    )
  }
}

export default OrderSummary
