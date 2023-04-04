import './card.css'
import Axios from 'axios'

import { HiOutlineX } from "react-icons/hi/index.esm.js";

import { useCardsContext } from '../../hooks/useCardsContext.js'

import { useEffect, useState } from 'react';

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
  

  return (
    <section>
      <div className="card-container">
        <div className="card__content-container">
          {card.map((product) => {
            return (
              <div key={product._id} className="card-content">
                <div className='card-part'>
                  <div className='card-del'>
                    <h4>you are buying</h4>
                    <HiOutlineX onClick={() => handleClick(product._id)} id='x-card'/>
                  </div>
                  <div className="card-body">
                    <div className="card-img">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-details">
                      <h2>{product.title}</h2>
                      <p>{product.dis}</p>
                      <h3>{product.price}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <button className='complete-p'>complete your purchace</button>
    </section>
  )  
}

export default Card