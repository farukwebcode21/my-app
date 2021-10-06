import React from 'react'

 const Product = () => {
    const products =[
        {name: 'Mobile', price: 15000},
        {name: 'Laptop', price: 150000},
        {name: 'Watch', price: 10000},
        {name: 'Shoe', price: 12000},
        {name: 'camera', price: 150000},
      ]

    return (
        <div>
            {
                products.map(product =><ProductDetail key={product.name} name={product.name} price={product.price}/>)
            }
          </div>
    )
}

function ProductDetail(props){
    return (
      <div className="person">
        <h2>Name : {props.name}</h2>
        <h4>Price : {props.price}</h4>
      </div>
    )
  }

export default Product;