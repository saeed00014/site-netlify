import { FaCrown, FaReact } from 'react-icons/fa/index.esm.js'
import { programs } from '../data.js'
import { Link } from 'react-router-dom'
import '../pages/home/home.css'

const Programs = () => {

  return (
    <section id='programs'>
      <div className="crown-container">
        <div className="crown-icon">
          <FaCrown className='crown'/>
          Programs
        </div>
      </div>
      <div className="programs__main-container">
          {programs.map((pro) => { 
            return (
              <div key={pro.id} className="programs-container">
                <div className="program-icon">
                  <FaReact />
                </div>
                <h2>{pro.title}</h2>
                <p>{pro.info}
                </p>
                <Link to={pro.path}>Learn more</Link>
              </div>
            )
          })}   
      </div>
    </section>
  )
}

export default Programs 