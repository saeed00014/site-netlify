import { Link } from "react-router-dom"
import FormInput from "../../components/form.js"
import { useRef } from 'react'

const Signin = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()

  const HandleClick = async (e) => {
    e.preventDefault()
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

    const user = json.find(o => o.username === usernameRef.current.value)
    const pass = json.find(o => o.password === passwordRef.current.value)

    if (pass && user) {
      window.location.href = "/"
      console.log(usernameRef.current.value)
      console.log(passwordRef.current.value)
    }else{
      console.log('noooooooooooo')
      let err = ''
      return (
        err = 'username or password is wrong'
      )
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={HandleClick}>
        <FormInput refer= {usernameRef} id='name' topic='username' type='text' placeholder='username'/>
        <FormInput refer= {passwordRef} id='password' topic='password' type='password' placeholder='password' errorMessage='username or password is wrong'/>
        <FormInput id='submit' topic='' type='submit'/>
      </form>
    </div>
  )
}

export default Signin