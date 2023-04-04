import { Link } from 'react-router-dom'
import './notfound.css'

const Notfound = () => {
  return (
    <section className='notfound'>
      <div className='notfound-container'>
        <div className="notfound-parallax">
          <div className="p-absolute">
            <h1>404</h1>
            <p>This page you are looking for is not found</p> 
          </div>
          <div className="p-absolute2">
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
          </div>
        </div>
        <div></div>
      </div>
    </section>
    )
}

export default Notfound