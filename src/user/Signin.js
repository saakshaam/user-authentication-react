import React,{ useState } from 'react'
import axios from 'axios'
const Signin=(props)=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [validEmail,setValidEmail]=useState(true)
    const [validPassword,setValidPassword]=useState(true)
    const emailHandler=(e)=>{
        setEmail(e.target.value)
        setValidEmail(true)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
        setValidPassword(true)
    }
    const  SubmitHandler=(e)=>{
        e.preventDefault();
        if(email === ""){
            setValidEmail(false)
        }
        if(password===""){
            setValidPassword(false)
        }
        if(email===" " || password===""){

        }else{
            axios.post("https://user-auth-apii.herokuapp.com/api/v1/login",{email,password})
            .then(response=>{
                console.log(response)
                props.errorStatus(false)
                props.handleLogged(true)
            }).catch(e=>{
                props.errorStatus(true)
                console.log(e)
            })
        }
    }



    return(
        <>
        <h1>Login</h1>
        <form onSubmit={SubmitHandler}>
        <div><label>Email:</label>
        <input type="text" 
        autocomplete='off'
        value={email}
        onChange={emailHandler}
        placeholder='Enter Email'
        className={!validEmail ? "error" :""}
        /></div>
        <div><label>Password:</label>
        <input type="password"
        autoComplete='off'
        value={password}
        onChange={passwordHandler}
        placeholder="Enter Password"
        className={!validPassword ? "error" : ""}
        /></div>
        <button className="mbutton" type="submit">Submit</button>

        </form>
        </>
    )
}
export default Signin