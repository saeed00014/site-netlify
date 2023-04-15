import { FaCrown } from 'react-icons/fa/index.esm.js'
import { programs } from '../data.js'
import { Link } from 'react-router-dom'
import '../pages/home/home.css'

const Programs = () => {

  return (
    <section className='program' id='programs'>
      <div className="crown-container">
         <p>Start Today</p> 
         <p>do you want to Start Training? Choose on Program Below</p> 
      </div>
      <div className="programs__main-container">
          {programs.map((pro) => { 
            return (
              <div key={pro.id} className="programs-container">
                <div className="program-img">
                  <img src={pro.image} alt="" />
                  <div className='program-details'>
                    <p>{pro.info}</p>
                    <Link to={pro.path}>Learn more</Link>
                  </div>
                </div>
              </div>
            )
          })}   
      </div>
    </section>
  )
}

export default Programs 