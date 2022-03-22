import logo from './logo.svg';
import './App.css';
import Register from './user/Register';
import Signin from './user/Signin';
import MainPage from './user/MainPage'
import React,{useState} from 'react'

function App() {

  const [isSignedUp,setIsSignedUp]=useState(false)
  const [isLoggedin,setIsLoggedIn]=useState(false)
  const [error,setError]=useState(false)
  const [name,setName]=useState("")

  return (
    <div className='App'>
    {isSignedUp && !isLoggedin &&
    <>
    <Signin errorStatus={setError} handleError={setError} handleLogged={setIsLoggedIn} />
    {error && <h5>Try Again!! Something went wrong...</h5>}
    <div>
      <h3>New Member!</h3>
      <button className="mbutton"
      onClick={()=>{
        setIsSignedUp(false)
      }}>Sign Up</button>
    </div>
    </>
    }
    {!isSignedUp &&
    <>
      <Register errorStatus={setError} handleSigned={setIsSignedUp}/>
      {error && <h5>Try Again!! Something went wrong...</h5>}
      <div>
        <h3>Already Member?</h3>
        <button
        className="mbutton"
        onClick={()=>{
          setIsSignedUp(true)
          setIsLoggedIn(false)
        }}>
          Login
        </button>
        <p>Created By Saksham Shrivastava!</p>
      </div>
    </>
    }
    {isLoggedin &&
    <>
    <MainPage name={name} />
    </>}
  </div>
  );
}

export default App;
