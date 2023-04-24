import { Link } from 'react-router-dom'
import './notfound.css'
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

const Notfound = () => {
  return (
    <section id='header' className='notfound'>
      <MouseParallaxContainer className="notfound-container">
        <div className="notfound-parallax">
              <MouseParallaxChild className='p-absolute' factorX={-0.02} factorY={-0.025}>
                <h1>404</h1>
                <p>This page you are looking for is not found</p> 
              </MouseParallaxChild>
              <MouseParallaxChild className='p-absolute2' factorX={0.02} factorY={0.025}>
                <p>What are you looking for?</p>
                <Link to='/'>
                  <p>go to home page</p>
                  <div className='line-container'>
                    <div className="line-left">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                    <div className="line-right">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                    </div>
                </Link>
              </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
    </section>
    )
}

export default Notfound