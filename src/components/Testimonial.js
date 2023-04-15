import { TiWeatherCloudy } from 'react-icons/ti/index.esm.js'
import { AiOutlineArrowLeft } from 'react-icons/ai/index.esm.js'
import { AiOutlineArrowRight } from 'react-icons/ai/index.esm.js'
import { testimonials } from '../data.js'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import {AiFillLike} from 'react-icons/ai/index.js'
import {AiTwotoneDislike} from 'react-icons/ai/index.js'


const Testimonial = () => {

  const text = useRef()
  const username = useRef()
  const password = useRef()

  const [like, setLike] = useState(0)
  const [dislike, setDisLike] = useState(0)


  const likeClick = (e,id) => {
    console.log(e.target.id)
    console.log(id)
    if(e.target.id == id) {
    setLike(id)
    }
  }
  
  const dislikeClick = () => {
    setDisLike(dislike => dislike -1 )
  }

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

  return (
    <section id='testi' className="testi__main-container">
      <div className="testi-container">
        <div className="testi-top">
          <div><p>Read Our Old Customers Exprience With Us and Write your Thoughts as Well</p></div>
        </div>
        <article className='testi-a'>
          <div className="ipe-container">
            <div className="submit-idea">
              <h3>Share Your Exprince With Us</h3>
              <form onSubmit={handleSubmit} className="enter-idea">
                <label htmlFor='text'>Enter Your Opinion</label>
                <input ref={text} id='text' type="textarea" placeholder='My Exprince'/>
                <label htmlFor="username">Username</label>
                <input ref={username} id='username' type='username' placeholder='Username'/>
                <label htmlFor="password">password</label>
                <input ref={password} id='password' type="password" placeholder='Password'/>
                <input type="submit" />
                <Link to='/signup'>you dont have an acount? Signup first!</Link>
              </form>
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
                    <button id={ipe.id} onClick={(e) => likeClick(e,id)}>
                      {like} <AiFillLike/>
                    </button>
                    <button id={ipe.id} onClick={(e) => dislikeClick(e)}>
                      {dislike} <AiTwotoneDislike/>
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