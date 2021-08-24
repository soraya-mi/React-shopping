import React from 'react'
import './Order.css'
import Wrapper from '../../hoc/Wrapper'
import Button from '../UI/Button/Button'

const Order = (props) => {
  const summery = Object.keys(props.products).map((item) => {
    return (
      <li key={item}>
        {item}: {props.products[item]}
      </li>
    )
  })

  return (
    <Wrapper>
      <h3>سفارش</h3>
      <ul>{summery}</ul>
      <p>قیمت کل: {props.price}</p>
      <p>پرداخت می کنید؟</p>
      <Button btnType="success" click={props.continue}>
        بله
      </Button>
      <Button btnType="danger" click={props.cancel}>
        خیر
      </Button>
    </Wrapper>
  )
}

export default Order
