import '../pages/home/home.css'

import React from 'react'
import { Link } from 'react-router-dom'

import  { shop } from '../data.js'
import { HashLink } from 'react-router-hash-link'

import { useDispatch } from 'react-redux'
import { addCard } from '../store/cardSlice.js'

const Shop = () => {
  const dispatch = useDispatch()

  const handleClick = async (id, image, dis, title, price, size, color) => {

    const card = {id, image, dis, title, price, size, color}
    console.log(JSON.stringify(card))


    const response = await fetch('http://localhost:10000/card', {
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
    console.log(json)
    dispatch(addCard(json))
  }

  return (
    <section className='section-shop' id='shop'>
      <div className="shop-container">
        <div className="shop-top">
          <h1>Shop Now</h1>
          <h2>Our Original and Tested Products</h2>
        </div>
        <div className="shop__content-container">
          <HashLink id='bbtn' className="l-btn" to='#1'>
          </HashLink>
          {shop.map((details) => {
            return (
              <div id={details.id} key={details.id} className="shop-content">
                <div className='img__shop-container'>
                  <img className='img-shop' src={details.image} alt="" />
                  <div className="shop-description">
                    <h3>{details.title}</h3>
                    <Link onClick={() => handleClick(details.id, details.image, details.dis, details.title, details.price, details.size, details.color)} to="/card">
                    <button className='addcard-btn'>Add Card</button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
          <HashLink id='bbtn' className="r-btn" to='#shop5'>
          </HashLink>
        </div>
      </div>
    </section>
  )
}

export default Shop