import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import image from '../images/main_header.png'
import './navbar.css'

const Header = () => {
  return (
     <header>
        <div className="main__header-container">
          <div className="main__header-left">
            <div className="main__header-left-content">
             <h3>#100DaysOfWorkOut</h3>
              <h1>Join The Legends Of 
                The Fitness World </h1>
             <p>learn about the best diets 
              and work outs you can do at home
              fastest way ever
             </p>
             <div className="gt-st">
               <Link to="plans/">
                  <button className="btn-lg">Get started</button>
              </Link>        
             </div>
            </div>
          </div>
          <div className="main__header-right">
            <div className="squer-container">
              <div className="squer"></div>
              <div className="squer"></div>
              <div className="squer"></div>
              <div className="squer"></div>
              <div className="header-img">
                <img src={image} alt="" />
              </div>
              <ul className='page-parts'>
                  <li>
                  <HashLink to="#programs">Programs</HashLink>
                  </li>
                  <li>
                    <HashLink to="#values">Values</HashLink>
                  </li>
                  <li>
                    <HashLink to="#shop">Shop</HashLink>
                  </li>
                  <li>
                    <HashLink to="#faqs">FAQs</HashLink>
                  </li>
                  <li>
                    <HashLink to="#testi">Testimonials</HashLink>
                  </li>
                  <li className="for-parts"></li>      
                </ul>
            </div>
          </div>
        </div>
     </header>
  )
}

export default Header


