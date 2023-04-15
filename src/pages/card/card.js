import './card.css'

import { useCardsContext } from '../../hooks/useCardsContext.js'

import { useEffect, useState } from 'react';

import { shop } from '../../data.js'

const Card = () => {

  const[card, setCards] = useState([])

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch('https://dull-red-chick-wrap.cyclic.app/card' ,{
        header: {
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true,
          "Access-Control-Expose-Headers": "*",
          "Access-Control-Allow-Methods": "*" 
        }
      })
      
      const json = await res.json()
      setCards(json)
    }
    fetchCards()
  }, [])

  const { dispatch } = useCardsContext()

  const handleClick = async (id) => {
    const response = await fetch('https://dull-red-chick-wrap.cyclic.app/card/' + id, {
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

    if (response.ok) {
      dispatch({type: 'DELETE_CARD', payload: json})
      document.location.reload();
    }
  }

  let [Qty, setQty] = useState('')
  
  const HandelSelect = (e, price) => {
    let q = e.target.value
    let t = price
    const c = q * t
    console.log(c)
  }
  const HandelPrice = (price) => {
    let fp = price * Qty
    console.log(Qty)
    return (fp).toFixed(2)
  }
  return (
    <section className='scard'>
      <div className="scard-container">
        <div className="scard__content-container">
          {card.map((product) => {
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
                        <select onClick={(e) => HandelSelect(e, product.price)} name="Qty" id="">
                          <option value="1">Qty: 1</option>
                          <option value="2">Qty: 2</option>
                          <option value="3">Qty: 3</option>
                          <option value="4">Qty: 4</option>
                          <option value="5">Qty: 5</option>
                        </select>
                        <h5 onClick={() => handleClick(product._id)}>Delete</h5>
                      </div>
                    </div>
                  </div>
                  <div className="scard-bottom">
                   <h3>Subtotal ({} items): {Qty}$</h3>
                  </div>
              </div>
            )
          })}
        </div>
        <div className="right-scard">
          <div className="pricehandler-content"> 
            <div className="pricehandler-top">
              <h3>Subtotal ({} items): {}$</h3>
            </div>
            <button>proceed to checkout( item)</button>       
          </div>
          <h3>you might wanna teke a look at this items aswell</h3>
          {shop.map((product) => {
            return (         
            <div className="suggestions">          
              <img src={product.image} alt="" />            
              <div className="suggestions-text">           
                <h3>{product.title}</h3>           
                <p>{product.dis}</p>           
                <h4>{product.price}</h4>           
                <button>Add to Cart</button>            
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