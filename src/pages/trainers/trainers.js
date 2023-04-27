import Header from "../../components/Header-back.js"
import BackgroundHeader from '../../images/header_bg_5.jpg'
import { trainers } from "../../data.js"
import './trainers.css'


import app3 from '../../images/app3.jpg'
import app2 from '../../images/app2.jpg'
import app1 from '../../images/app1.jpg'

import { FaUserAlt } from "react-icons/fa/index.esm.js"
import { useState } from "react"

const Trainers = () => {

  return (
    <section className="trainers">
      <Header image={BackgroundHeader} title='Who are Your Trainers' text='We have the Most Exprienced and responsible Exports to Help you in your Way'/>
      <div className="trainers-container">
        {trainers.map(({id, image, name, job, socials, followers, students, year}) => {

          const mystyle = {
            backgroundImage:
            `linear-gradient(to top, var(--alike-color) 70%, rgba(0, 0, 0, 0) 10%), url(${image})`
          };
          
          return(
            <div className="card__main-container">
            <div className="card-front">
              <div className="card-img">
                <img src={image} alt="" />
              </div>
              <div className="card-body">
                <h3 className="name">{name}</h3>
                <div className="card-bottom">
                  <div className="card-bottom1">
                    <FaUserAlt /><span>{followers}</span>
                  </div>
                  <div className="card-bottom2">
                    <img className="app1" src={app1} alt="" />
                    <img className="app2" src={app2} alt="" />
                    <img className="app3" src={app3} alt="" />                    
                  </div>
                </div>
              </div>
            </div>
            <div className="card-back">
              <div className="back-head">
                <h4>{job}</h4>
                <p>{year} Years of Exprience</p>
              </div>
              <div className="back-top">
                <p className="followers">{followers}<span>followers</span></p>
                <p className="followers">{students}<span>students</span></p>
              </div>
              <button>Personal Site</button>
              <div className="social-media">
                <p>find me on social media</p>
                <div className="back-bottom">
                  <a href="https://www.telegram.com" className="social-media"><img src={app2} alt="" /></a>
                  <a href="https://www.whatsapp.com" className="social-media"><img src={app1} alt="" /></a>
                  <a href="https://www.email.com" className="social-media"><img className="app3-back" src={app3} alt="" /></a>
                </div>
              </div>
            </div>
  
            <div style={mystyle} className="background">
            </div>
          </div>
        )})}
      </div>
    </section>
  )
} 

export default Trainers