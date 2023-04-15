import { Link } from 'react-router-dom'

import { FaLinkedinIn } from 'react-icons/fa/index.esm.js'
import { FaFacebookF } from 'react-icons/fa/index.esm.js'
import { BsTwitter } from 'react-icons/bs/index.esm.js'
import { AiOutlineInstagram } from 'react-icons/ai/index.esm.js'

const Footer = () => {
  return (
    <footer>
      <div className="footer__main-container">
        <article className='first-article'>
          <Link to='/'>
            <span>BODYMAKE</span>
          </Link>
          <p>
            find us in social media our admins aswer you everyday in week from 10AM to 17PM
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
            <Link to='/about'>About</Link>
            <Link to='/plans'>Plans</Link>
            <Link to='/trainers'>Trainers</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
          </article>
          <article className='third-article'>
            <h4>Insight</h4>
            <Link to='sports-pro-site/card'>Card</Link>
            <Link to='/s'>Case Studios</Link>
            <Link to='/s'>Events</Link>
            <Link to='/s'>communities</Link>
            <Link to='/s'>FAQs</Link>
          </article>
          <article className='fourth-article'>
            <h4>Get In Touch</h4>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/dsdf'>Support</Link>
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