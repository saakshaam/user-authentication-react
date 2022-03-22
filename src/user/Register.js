import React,{ useState } from 'react'
import axios from 'axios'

const Register=(props)=> {


const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [validName,setValidName]=useState(true)
const [validEmail,setValidEmail]=useState(true)
const [validPassword,setValidPassword]=useState(true)

  const handleName=(e)=>{
    setName(e.target.value)
    setValidName(true)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setValidEmail(true)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
    setValidPassword(true)
  }
const handleSubmit=(e)=>{
  e.preventDefault();
  if(name === " "){
    setValidName(false)
  }
  if(email === " "){
    setValidEmail(false)
  }
  if(password === ""){
    setValidPassword(false)
  }
  if(name===" "|| email===" " || password===" "){

  }else{
    axios.post("https://user-auth-apii.herokuapp.com/api/v1/register",{name,email,password})
    .then(response=>{
      alert("Registration Successful !!")
      props.handleSigned(true)
      props.errorStatus(false)
      console.log(response)
    })
    .catch(error=>{
      props.errorStatus(true)
      console.log(error)
    })
  }
}

  return (
    <>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" 
              minLength="6"
              placeholder='Enter Name'
              className={!validName ? 'error' : " "}
              autoComplete='off' value={name} onChange={handleName}/>
            </div>
            <div>
              <label>Email:</label>
              <input type="email" 
              placeholder="Enter Email"
              className={!validEmail ? 'error' : ""}
              autoComplete='off' value={email} onChange={handleEmail}/>
            </div>
            <div>
              <label>Password:</label>
              <input type="password"
              minLength='6'
              placeholder="Enter Password"
              className={!validPassword ? 'error' : " "}
              autoComplete='off' value={password} onChange={handlePassword}/>
            </div>
            <button className="mbutton" type="submit">Submit</button>
        </form>
    </>
  )
}

export default Register
