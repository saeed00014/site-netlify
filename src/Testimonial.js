import { TiWeatherCloudy } from 'react-icons/ti/index.esm.js'
import { AiOutlineArrowLeft } from 'react-icons/ai/index.esm.js'
import { AiOutlineArrowRight } from 'react-icons/ai/index.esm.js'
import { testimonials } from '../data.js'
import { useState } from 'react'

import {AiFillLike} from 'react-icons/ai/index.js'
import {AiTwotoneDislike} from 'react-icons/ai/index.js'


const Testimonial = () => {
  let [index, setIndex] = useState(1)
  const {name, quote, job, avatar} = testimonials[index]

  const slideplus = () => {     
    setIndex(prev => prev + 1)

    if (index >= testimonials.length - 1) {
      setIndex(0)
    }
  }

  const slideminos = () => {
    if (index < 1) {
      setIndex(4)
    }else {
      setIndex(next => next - 1)
    }
  }

  return (
    <section id='testi' className="testi__main-container">
      <div className="testi-container">
        <div className="testi-top">
          <div><p>Read Our Old Customers Exprience With Us and Write your Thoughts as Well</p></div>
        </div>
        <article className="testi-middle">
          <div className="middle__main-container">
            <div className="middle-container">
              <img src={avatar} className='profile-img'/>
              <p>{quote}</p>
              <h6>{name}</h6>
              <p>{job}</p>
            </div>
          </div>
          <div className="testi-bottom">
            <button onClick={slideminos} className="arrow-btn"> 
              <AiOutlineArrowLeft />
            </button>
            <button onClick={slideplus} className="arrow-btn">
              <AiOutlineArrowRight/> 
            </button>
          </div> 
        </article>
        <article className='testi-a'>
          <div className="ipe-container">
            {testimonials.map((ipe) => {
              return (
              <div id={ipe.id} className="ipe-content">
                <div className="ipe-top">
                  <div className="ipe-details">
                    <img src={ipe.avatar} alt="" />
                    <h3>{ipe.name}-{ipe.job}</h3>
                  </div>
                  <div className="ipe-icon">
                    <button>
                      <AiFillLike />
                    </button>
                    <button>
                      <AiTwotoneDislike />
                    </button>
                  </div>
                </div>
                <div className="ipe-bottom">
                  <p>{ipe.quote}</p>
                </div>
              </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial