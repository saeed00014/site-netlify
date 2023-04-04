import image from '../images/values.jpg'
import { FaGem } from 'react-icons/fa/index.esm.js'
import { values } from '../data.js'
import { FaReact } from 'react-icons/fa/index.esm.js'

const Values = () => {
  return (
    <section id='values' className="main__values-container">
      <div className="left__value-container">
        <img src={image} alt="aa" />
      </div>
      <div className="right__value-container">
        <div className="value-icon">
          <div className='bsgem-icon'>
            <FaGem className='fagem'/>
            <p>Values</p>
          </div>
          <p className='m-p'>This is the day that the lord has made. We will rejoiceThis is the day that the lord has made. We will rejoice</p>
        </div>
        <div className="value__card-container">
        {
        values.map((val) =>{ 
          return (
            <div key={val.id} className="value-card">
              <span className='fareact-value'><FaReact id='fa-react'/></span>
              <h2>{val.title}</h2>
              <p>{val.desc}</p>
            </div>
          )
        })
        }
        </div>
      </div>
    </section>
  )
}

export default Values