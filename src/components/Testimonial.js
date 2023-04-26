import { testimonials } from '../data.js'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import idea1 from '../images/idea1.jpg'

import {AiFillLike} from 'react-icons/ai/index.js'
import {AiTwotoneDislike} from 'react-icons/ai/index.js'

import { useDispatch } from 'react-redux'
import { mapIdea } from '../store/signinSlice.js'
import { match } from 'assert'


const Testimonial = () => {
  const dispatch = useDispatch()

  const text = useRef()
  const username = useRef()
  const password = useRef()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:10000/form' ,{
      header: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })

    console.log(username.current.value)
    console.log(password.current.value)
    const json = await res.json()
    const user = json.find((info) => 
      info.username === username.current.value && info.password === password.current.value
    )
    console.log(user)

    console.log(JSON.stringify(text.current.value))
    
    if(user._id) {
      const response = await fetch('http://localhost:10000/form/' + user._id, {
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
      console.log(json)

      const response2 = await fetch('http://localhost:10000/form', {
        method: 'POST',
        body: JSON.stringify({
          username: username.current.value,
          email: user.email,
          birth: user.birth,
          password: password.current.value,
          text: text.current.value
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true,
          "Access-Control-Expose-Headers": "*",
          "Access-Control-Allow-Methods": "*" 
        }
      })
      const json2 = await response2.json()
      console.log(json2)
    }
  }

  const response2 = async () => {
    const res2 = await fetch('https://dull-red-chick-wrap.cyclic.app/form' ,{
    header: {
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true,
      "Access-Control-Expose-Headers": "*",
      "Access-Control-Allow-Methods": "*" 
    }
  })
    const data = await res2.json()
    console.log(data)
    dispatch(mapIdea(data))
  } 
  response2()

  const signin = JSON.parse(localStorage.getItem("idea"))
  console.log(signin)

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
            {signin &&
            signin.map((ipe) => {
              let indexAva = Math.floor(Math.random() * 5)
              console.log(indexAva)
              const avatar = testimonials[indexAva].avatar
              return (
              <div key={ipe._id} className="ipe-content">
                <div className="ipe-top">
                  <div className="ipe-details">
                    <img src={avatar} alt="" />
                    <h3>{ipe.username} - {ipe.email}</h3>
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
                  <p>{ipe.text}</p>
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