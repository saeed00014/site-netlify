import './card.css'
import { shop } from '../../data.js'
import { addCard, decreaseCard, deleteCard, getTotals, increaseCard } from '../../store/cardSlice.js';
import cardSlice from '../../store/cardSlice.js';
import { useDispatch, useSelector } from "react-redux";

import { BiChevronLeft } from 'react-icons/bi/index.esm.js'
import { BiChevronRight } from 'react-icons/bi/index.esm.js'
import { useEffect, useState } from 'react';

const Card = () => {

  const [pay, setPay] = useState(false)
  
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
    const response = await fetch('https://dull-red-chick-wrap.cyclic.app/card/' + product._id, {
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
    <section id='header' className='scard'>
      <div className="scard-container">
        <div className="scard__content-container">
          {card.cardItems &&
            card.cardItems.map((product) => {
            return (
              <div key={product.id} className="scard-content">
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
                        <h4>{product.size && `size: ${product.size}`}</h4>
                        <h4>{product.color && `color: ${product.color}`}</h4>
                      </div>
                      <div className='middle-details2'>
                        <div className='qty'>
                          {
                            product.size &&
                            <>
                              <button onClick={() => handleDe(product)} className='qty-btn1'><BiChevronLeft/></button>
                              <button onClick={() => handleIn(product)} className='qty-btn2'><BiChevronRight/></button> 
                            </>
                          }
                          { 
                            product.size ?
                            <h4 className='h4-det'>Qty: {product.cardQuantity}</h4> :
                            <h4 className='h4-pack'>Qty: 1</h4> 
                          }
                        </div>
                        <p>{product.limitations}</p>
                        <h5 onClick={() => handleDel(product)}>Delete</h5>
                      </div>
                    </div>
                  </div>
                  <div className="scard-bottom">
                   <h3>Subtotal ({product.cardQuantity} item{product.cardQuantity > 1 && 's'}): {handlePrice(product.cardQuantity * product.price)}$</h3>
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
            <button onClick={() => setPay(!pay)}>proceed to checkout({card.cardTotalQuantity} item{card.cardTotalQuantity > 1 && 's'})</button>       
          </div>
          <h3>Check our Suggested Products</h3>
          {shop.map((product) => {
            return (         
            <div key={product.id} className="suggestions">          
              <img src={product.image} alt="" />            
              <div className="suggestions-text">           
                <h3>{product.title}</h3>           
                <p>{product.dis}</p>           
                <h4>{product.price}$</h4>           
                <button onClick={() => handleAd(product)}>Add to Cart</button>            
              </div>           
            </div>
            )
          })}
        </div>
      </div>
      <div className={pay ? "proceed-pay" : "no-pay"}>
        <div className="pay-top">
          <h1>You are Buying</h1>
          <button onClick={() => setPay(false)}>x</button>
        </div>
        <div className="pay__product-container">
          {card.cardItems && 
            card.cardItems.map((product) => {
              return (
                <div className='pay-product'>
                  <img src={product.image} alt="" />
                </div>
              )
          })}
        </div>
        <h3>Subtotal: {card.cardTotalQuantity} item{card.cardTotalQuantity > 1 && 's'}: {card.cardTotalPrice}$</h3>
        <h3>Choose your Payment Method</h3>
        <div className='pay-method'>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  )  
}

export default Card