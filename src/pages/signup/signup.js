import './signup.css'

import FormInput from '../../components/form.js'

import { useRef, useState } from 'react'

import { useDispatch } from 'react-redux'
import { getSign } from '../../store/signinSlice.js'

const Signup = () => { 
  const usernameRef = useRef()
  const emailRef = useRef()
  const birthRef = useRef()
  const passwordRef = useRef()
  const confirmpasswordRef = useRef()

  const usernameeRef = useRef()
  const passworddRef = useRef()

  const [success, setSuccess] = useState(false)
  const [success1, setSuccess1] = useState(false)

  const dispatch = useDispatch()
  
  const HandleClickSignup = (e) => {
    e.preventDefault()
    const res = fetch('https://dull-red-chick-wrap.cyclic.app/form', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameRef.current.value,
        email: emailRef.current.value,
        birth: birthRef.current.value,
        password: passwordRef.current.value,
        text: ''
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
    setSuccess(true)
    console.log(usernameRef.current.value)
    console.log(emailRef.current.value)
    console.log(birthRef.current.value)
    console.log(passwordRef.current.value)
    console.log(confirmpasswordRef.current.value)
  }

  const HandleClickSignin = async (e) => {
    e.preventDefault()
    setSuccess1('Loading...')
    const res = await fetch('https://dull-red-chick-wrap.cyclic.app/form', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*" 
      }
    })

    const json = await res.json()
    console.log(json)

    const user = json.find(o => o.username === usernameeRef.current.value)
    const pass = json.find(o => o.password === passworddRef.current.value)
    
    if (pass && user) {
      setSuccess1(true)
      dispatch(getSign({pass, user}))
      setTimeout(() => {
        window.location.href = "/"
      }, "1500")
      console.log(usernameeRef.current.value)
      console.log(passworddRef.current.value)
    }else{
      setSuccess1('your username or password is wrong')
      console.log('noooooooooooo')
      let err = ''
      return (
        err = 'username or password is wrong'
      )
    }
  }

  return (
    <div id='header' className="form-container">
      <form className='form-sign' onSubmit={HandleClickSignin}>
        <h1>Signin</h1>
        <FormInput refer= {usernameeRef} id='name' topic='username' type='text' placeholder='username'/>
        <FormInput refer= {passworddRef} id='password' topic='password' type='password' placeholder='password' errorMessage='username or password is wrong'/>
        <FormInput id='submit' topic='' type='submit'/>
        {success1 == true && <h3>you are Signed in</h3>}
        <h3>{success1}</h3>
        <div className='quick-signin'>
          <h3>Signin as guest</h3>
          <div className='quick-bottom'>
            <h3>username: guest</h3><h3>password: geustA#1</h3>
          </div>
        </div>
      </form>
      <form className='form-sign' onSubmit={HandleClickSignup}>
        <h1>Signup</h1>
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
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%&$?!]).{6,18}"
          errorMessage= 'must contain 6-18 characters a number and an uppercase letter and a special letter'/>
        <FormInput
          refer= {confirmpasswordRef}
          id= 'confirmpassword'
          topic= 'Confirm Password' 
          type= 'password'
          placeholder= 'Confirm Password'
          errorMessage= 'it doent match the password'/>
        <FormInput id= 'submit' topic= '' type= 'submit'/>
        <h3 className='acount-made' success={success.toString()}>Your Acount has been Successfully Made </h3>
      </form>
    </div>
  )
}

export default Signup