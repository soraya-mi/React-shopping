import React from 'react'
import Builder from './Builder/Builder'
import './Controls.css'
const products = [
  { title: 'Product 1', type: 'product1' },
  { title: 'Product 2', type: 'product2' },
  { title: 'Product 3', type: 'product3' },
  { title: 'Product 4', type: 'product4' },
]
const Controls = (props) => {
  return (
    <div className="controls">
      <div className="price">
        <p>قیمت کل: {props.price}</p>
      </div>
      {products.map((item) => {
        return (
          <Builder
            key={item.title}
            title={item.title}
            add={() => props.productAdd(item.type)}
            remove={() => props.productRemove(item.type)}/>
        )
      })}
      <div>
      <button className="order-btn" onClick={props.order}>
        سفارش
      </button>
      </div>
    </div>
  )
}

export default Controls
