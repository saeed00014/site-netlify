import './signup.css'

import FormInput from '../../components/form.js'

import { useRef } from 'react'

import { Link } from 'react-router-dom'

const Signup = () => { 
  const usernameRef = useRef()
  const emailRef = useRef()
  const birthRef = useRef()
  const passwordRef = useRef()
  const confirmpasswordRef = useRef()
  
  const HandleClick = (e) => {
    e.preventDefault()
    const res = fetch('https://dull-red-chick-wrap.cyclic.app/form', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameRef.current.value,
        email: emailRef.current.value,
        birth: birthRef.current.value,
        password: passwordRef.current.value
      }), 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })
    console.log(usernameRef.current.value)
    console.log(emailRef.current.value)
    console.log(birthRef.current.value)
    console.log(passwordRef.current.value)
    console.log(confirmpasswordRef.current.value)
  }

  const navigater = () => {
    window.location.href = "/signin"
  }
  
  return (
    <div className="form-container">
      <form onSubmit={HandleClick}>
        <h1>Regester</h1>
        <FormInput
          refer= {usernameRef}
          id= 'name'
          topic= 'Username'
          type= 'text'
          placeholder= 'Username'
          pattern="^[A-Za-z0-9]{3,12}$"
          errorMessage= 'must contain 3-12 characters'/>
        <FormInput
          refer= {emailRef}
          id= 'email'
          topic= 'Email'
          type= 'email'
          placeholder= 'Email'
          errorMessage= 'not valid email'/>
        <FormInput       
          refer= {birthRef} 
          id= 'birth' 
          topic= 'Date of Birth' 
          type= 'date' 
          placeholder= ''/>
        <FormInput 
          refer= {passwordRef}
          id= 'password'
          topic= 'Password'
          type= 'password'
          placeholder= 'Password'
          errorMessage= 'must contain 3-12 characters a number and an uppercase letter'/>
        <FormInput
          refer= {confirmpasswordRef}
          id= 'confirmpassword'
          topic= 'Confirm Password' 
          type= 'password'
          placeholder= 'Confirm Password'
          errorMessage= 'it doent match the password'/>
        <FormInput id= 'submit' topic= '' type= 'submit' onClick={navigater}/>
      </form>
    </div>
  )
}

export default Signup