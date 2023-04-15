import { useState } from "react"


const  FormInput = ({id, topic, type, placeholder, refer, pattern, errorMessage, onClick}) => {
  const [unset, setUnset] = useState(false)

  const onBlur = (e) => {
    setUnset(true)
  }

  return (
    <div className="input-container">
      <label htmlFor={id}>{topic}</label>
      <input ref={refer} id={id} type={type} placeholder={placeholder} pattern={pattern} onClick={onClick} onBlur={onBlur} unset={unset.toString()} required= {true}/>
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput