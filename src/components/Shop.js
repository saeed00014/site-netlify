import '../pages/home/home.css'

import React from 'react'
import { useCardsContext } from '../hooks/useCardsContext.js'
import { Link } from 'react-router-dom'

import { FaShoppingCart } from 'react-icons/fa/index.esm.js'

import  { shop } from '../data.js'

const Shop = () => {
  const { dispatch } = useCardsContext()

  const handleClick = async (image, dis, title, price) => {

    const card = {image, dis, title, price}
    console.log(JSON.stringify(card))

    const response = await fetch('https://dull-red-chick-wrap.cyclic.app/card', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })
    console.log(response.url)
    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <section id='shop'>
      <div className="shop-container">
        <h2>
          <FaShoppingCart id='card'/> Shop
        </h2>
        <div className="shop__content-container">
          {shop.map((details) => {
            return (
              <div key={details.id} className="shop-content">
                <div className='img__shop-container'>
                  <img className='img-shop' src={details.image} alt="" />
                  <div className="shop-description">{details.dis}</div>
                </div>
                <h3>{details.title}</h3>
                <h3>{details.price}</h3>
                <Link onClick={() => handleClick(details.image, details.dis, details.title, details.price)} to="/card">
                 <button className='addcard-btn'>Add Card</button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Shop