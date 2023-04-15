import { useState } from 'react'

import { values } from '../data.js'

const Values = () => {
  const [index, setIndex] = useState(2)
  const [index1, setIndex1] = useState(0)
  const [index2, setIndex2] = useState(1)
 
  const val = [
    {
      id: 1,
      value: values[index].image
    },
    {
      id: 2,
      value: values[index1].image
    },
    {
      id: 3,
      value: values[index2].image
    },
    {
      id: 4,
      value: values[3].image
    },
    {
      id: 5,
      value: values[4].image
    }
  ]

  const HandleClickright = () => {
    if (index === 1) {
      setIndex(0)
      setIndex1(1)
      setIndex2(2)
    }else if (index === 2) {
      setIndex(0)
      setIndex1(1)
      setIndex2(2)
    }else {
      setIndex(1)
      setIndex1(2)
      setIndex2(0)
    }
  }

  const HandleClickleft = () => {
    if (index === 1) {
      setIndex(0)
      setIndex1(1)
      setIndex2(2)
    }else if (index === 2) {
      setIndex(1)
      setIndex1(2)
      setIndex2(0)
    }else {
      setIndex(2)
      setIndex1(0)
      setIndex2(1)
    }
  }
  

  return (
    <section id='values' className="values">
      <div className="value-container">
        <div className="value-icon">
          <p className='m-p'>See What We Have To Offer In BODYMAKE Our Equipments and Products</p>
        </div>
        <div className="value__card-container">
          {val.map((v) => {
            return <img src={v.value} alt="" />
          })}
          <button onClick={HandleClickleft} className='l-btn'></button>
          <button onClick={HandleClickleft} className='r-btn'></button>
        </div>
      </div>
    </section>
  )
}

export default Values