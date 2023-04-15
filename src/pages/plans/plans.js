import './plans.css'

import { Link } from 'react-router-dom'

import { useCardsContext } from '../../hooks/useCardsContext.js'

import { plans } from '../../data.js'
import {TiTickOutline} from 'react-icons/ti/index.esm.js'
import Header from "../../components/Header-back.js"
import image from '../../images/header_bg_4.jpg'

const Plans = () => {
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
    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <section className='plans'>
      <Header image={image} title='Start Training' text='Our Tested Plans with 100% Garentee and Lowest price'/>
      <div className="plans-container">
        <div className="plans-content">
          {plans.map((plan) => {
            const features = plan.features
            return (
              <div key={plan.id} className="plan-content">
                <h1>{plan.title}</h1>
                <small>{plan.dis}</small>
                <h1 id='price'>{`$${plan.price}`}<p>/mo</p></h1> 
                {features.map((fea , index) => {
                  const opa = fea.available
                  return (
                    <div key={index}>
                      <h3 className='available' >{opa &&  <><span id="tick" ><TiTickOutline /></span>{fea.feature}</>}</h3>
                      <h3 className='unavailable'>{!opa && <><span id="tick">{''}</span>{fea.feature}</>}</h3>
                    </div>
                  )
                })}
                <div className='buy-btn'>
                  <span id='tick'></span>
                  <Link onClick={() => handleClick(plan.image, plan.dis, plan.title, plan.price)} to="/card">
                    <button>Buy The Plan</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Plans