

const  FormInput = ({id, topic, type, placeholder, refer, pattern, errorMessage, onClick, HandleClick}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{topic}</label>
      <input ref={refer} id={id} type={type} placeholder={placeholder} pattern={pattern} onClick={onClick} required= {true}/>
      <span>{HandleClick}{errorMessage}</span>
    </div>
  )
}

export default FormInput