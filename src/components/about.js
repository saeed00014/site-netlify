import { Link } from 'react-router-dom'
import image from '../images/about11.jpg'


const About = () => {
  return(
    <section className="habout">
        <div className="habout-content">
          <div className="habout-img">
            <img src={image} alt="" />
          </div>
          <div className="habout-text">
            <h1>WHO WE ARE</h1>
            <p>Welcome to Bodymake.com! Our mission is to provide you with the tools and resources to build
              your body for whatever health and wellness goal you set your sight on. From programs and articles to supplements and gear, every part of your routine starts here.</p>
            <p>Build your body. Build your mind. Build your life.
              Let's get to work.</p>
            <Link to="/about">OUR STORY</Link>
          </div>
        </div>
    </section>
  )
}

export default About