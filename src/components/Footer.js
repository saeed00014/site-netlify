import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

import { FaLinkedinIn } from 'react-icons/fa/index.esm.js'
import { FaFacebookF } from 'react-icons/fa/index.esm.js'
import { BsTwitter } from 'react-icons/bs/index.esm.js'
import { AiOutlineInstagram } from 'react-icons/ai/index.esm.js'
import FAQ from './FAQ.js'

const Footer = () => {
  return (
    <footer>
      <div className="footer__main-container">
        <article className='first-article'>
          <Link to='sports-pro-site'>
            <img src={logo} alt="ff" />
          </Link>
          <p>
          To insert an icon, add the name of the icon class to any inline HTML element. The and elements are widely used to add icons.
          </p>
          <div className="web-icons">
            <div className="a-container">
              <a href="https://www.linkedin.com/"> <FaLinkedinIn className='web-icon'/> </a>
            </div>
            <div className="a-container">
              <a href="https://www.facebook.com/"> <FaFacebookF className='web-icon'/> </a>
            </div>
            <div className="a-container">
              <a href="https://www.Twitter.com/"> <BsTwitter className='web-icon'/> </a>
            </div>
            <div className="a-container">
             <a href="https://www.instagram.com/"> <AiOutlineInstagram className='web-icon'/> </a>
            </div>
          </div>
        </article>
        <article className='article__bottom-container'>
          <article className='sec-article'>
            <h4>Permalinks</h4>
            <Link to='sports-pro-site/about'>About</Link>
            <Link to='sports-pro-site/plans'>Plans</Link>
            <Link to='sports-pro-site/trainers'>Trainers</Link>
            <Link to='sports-pro-site/blog'>Blog</Link>
            <Link to='sports-pro-site/contact'>Contact</Link>
          </article>
          <article className='third-article'>
            <h4>Insight</h4>
            <Link to='sports-pro-site/card'>Card</Link>
            <Link to='sports-pro-site/s'>Case Studios</Link>
            <Link to='sports-pro-site/s'>Events</Link>
            <Link to='sports-pro-site/s'>communities</Link>
            <Link to='sports-pro-site/s'>FAQs</Link>
          </article>
          <article className='fourth-article'>
            <h4>Get In Touch</h4>
            <Link to='sports-pro-site/contact'>Contact Us</Link>
            <Link to='sports-pro-site/dsdf'>Support</Link>
          </article>
        </article>
      </div>
      <div className="footer-bottom">
        <small>2023</small>
      </div>
    </footer>
  )
}

export default Footer