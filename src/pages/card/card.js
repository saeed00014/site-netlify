import './card.css'
import { shop } from '../../data.js'
import { addCard, decreaseCard, deleteCard, getTotals, increaseCard } from '../../store/cardSlice.js';
import cardSlice from '../../store/cardSlice.js';
import { useDispatch, useSelector } from "react-redux";

import { BiChevronLeft } from 'react-icons/bi/index.esm.js'
import { BiChevronRight } from 'react-icons/bi/index.esm.js'
import { useEffect, useState } from 'react';

const Card = () => {
  
  const card = useSelector((state) => state.card)
  console.log(card.cardItems[0])

  const handleClick = async (id) => {
    const response = await fetch('http://localhost:10000/card/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })
    const json = await response.json()
  }

  const dispatch = useDispatch()

  const handleDe = (product) => {
    dispatch(decreaseCard(product))
  }
  
  const handleIn = (product) => {
    dispatch(increaseCard(product))
  }

  const handleDel = async (product) => {
    dispatch(deleteCard(product))
    const response = await fetch('http://localhost:10000/card/' + product._id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })
  }

  const handleAd = (product) => {
    dispatch(addCard(product))
  }

  const handlePrice = (price) => {
    price = Math.floor(price * 100) / 100;
    return price.toFixed(2)
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [card, dispatch])

  return (
    <section className='scard'>
      <div className="scard-container">
        <div className="scard__content-container">
          {card.cardItems &&
            card.cardItems.map((product) => {
            return (
              <div key={product._id} className="scard-content">
                  <div className='scard-top'>
                    <h1>Shopping Cart</h1>
                    <div><small>price</small></div>
                  </div>
                  <div className="scard-body">
                    <div className="scard-img">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="scard-details">
                      <div className='top-details'>
                        <h3>{product.title}</h3>
                        <h3>{product.price}$</h3>
                      </div>
                      <p>{product.dis}</p>
                      <div className="middle-details1">
                        <h4>size: {product.size}</h4>
                        <h4>color: {product.color}</h4>
                      </div>
                      <div className='middle-details2'>
                        <div className='qty'>
                          <button onClick={() => handleDe(product)} className='qty-btn1'><BiChevronLeft/></button>
                          <h4>Qty: {product.cardQuantity}</h4> 
                          <button onClick={() => handleIn(product)} className='qty-btn2'><BiChevronRight/></button> 
                        </div>
                        <p>{product.limitations}</p>
                        <h5 onClick={() => handleDel(product)}>Delete</h5>
                      </div>
                    </div>
                  </div>
                  <div className="scard-bottom">
                   <h3>Subtotal ({product.cardQuantity} item): {handlePrice(product.cardQuantity * product.price)}$</h3>
                  </div>
              </div>
            )
          })}
        </div>
        <div className="right-scard">
          <div className="pricehandler-content"> 
            <div className="pricehandler-top">
              <h3>Subtotal ({card.cardTotalQuantity} item{card.cardTotalQuantity > 1 && 's'}): {card.cardTotalPrice}$</h3>
            </div>
            <button>proceed to checkout({card.cardTotalQuantity} item{card.cardTotalQuantity > 1 && 's'})</button>       
          </div>
          <h3>Check our Suggested Products</h3>
          {shop.map((product) => {
            return (         
            <div className="suggestions">          
              <img src={product.image} alt="" />            
              <div className="suggestions-text">           
                <h3>{product.title}</h3>           
                <p>{product.dis}</p>           
                <h4>{product.price}</h4>           
                <button onClick={() => handleAd(product)}>Add to Cart</button>            
              </div>           
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )  
}

export default Card