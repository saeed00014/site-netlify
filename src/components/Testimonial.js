import { testimonials } from '../data.js'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import idea1 from '../images/idea1.jpg'

import {AiFillLike} from 'react-icons/ai/index.js'
import {AiTwotoneDislike} from 'react-icons/ai/index.js'


const Testimonial = () => {

  const text = useRef()
  const username = useRef()
  const password = useRef()
  
  const handleSubmit = async () => {
    const res = await fetch('https://dull-red-chick-wrap.cyclic.app/card' ,{
      header: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })

    const user = res.find({})
  }

  const handleLike = () => {

  }

  const handleDislike = () => {

  }

  return (
    <section id='testi' className="testi__main-container">
      <div className="testi-container">
        <article className='testi-a'>
          <div className="ipe-container">
            <div className="submit-idea">
              <form onSubmit={handleSubmit} className="enter-idea">
                <h1>your Exprince</h1>
                <div>
                  <label htmlFor='text'>Enter Your Opinion</label>
                  <input ref={text} id='text' type="textarea" placeholder='My Exprince'/>
                </div>
                <div>
                  <label htmlFor="username">Username</label>
                  <input ref={username} id='username' type='username' placeholder='Username'/>
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input ref={password} id='password' type="password" placeholder='Password'/>
                </div>
                <div>
                  <input type="submit" />
                </div>
                <div>
                  <Link to='/signup'>you dont have an acount? Signup first!</Link>
                </div>
              </form>
              <img className='submit-img' src={idea1} alt="" />
            </div>
            {testimonials.map((ipe) => {
              const id = ipe.id
              return (
              <div key={ipe.id} id={ipe.id} className="ipe-content">
                <div className="ipe-top">
                  <div className="ipe-details">
                    <img src={ipe.avatar} alt="" />
                    <h3>{ipe.name} - {ipe.job}</h3>
                  </div>
                  <div className="ipe-icon">
                    <button id={ipe.id} onClick={() => handleLike()}>
                      {ipe.like} <AiFillLike/>
                    </button>
                    <button id={ipe.id} onClick={() => handleDislike()}>
                      {ipe.dislike} <AiTwotoneDislike/>
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