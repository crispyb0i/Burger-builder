import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css'
import axios from '../../../Axios-orders'

class ContactData extends Component {
  state ={
    name: '',
    email: '',
    address: {
      street:'',
      postalCode:''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'David Shin',
        address: {
          street: 'Teststreet',
          zipCode: '53142',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false})
        this.props.history.push('/')
      })

      .catch(error => this.setState({ loading: false}))
    console.log(this.props.ingredients)
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Enter Name"/>
        <input className={classes.Input} type="text" name="email" placeholder="Enter Email"/>
        <input className={classes.Input} type="text" name="street" placeholder="Enter Street"/>
        <input className={classes.Input} type="text" name="postal" placeholder="Enter Postal Code"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    )
    if (this.state.loading){
      form = <Spinner/>
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
