import { Link } from "react-router-dom"
import './navbar.css'

const Header = () => {
  return (
     <header className="header-home" id="header">
        <div className="main__header-container">
          <div className="header-container">
            <div className="main__header-left">
              <div className="main__header-left-content">
              <h1 className="typing-text">Welcome to<br/>BODYMAKE.COM</h1>
              <h3>Strongest BodyBuilding Services and Products</h3>
              <div className="gt-st">
                <Link className="btn-lg" to="plans/">
                  Get started
                </Link>        
              </div>
              </div>
            </div>
            <div className="main__header-right"></div>
          </div>
        </div>
     </header>
  )
}

export default Header


