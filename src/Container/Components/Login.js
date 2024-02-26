import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/CustomAuth'
import { useNavigate } from 'react-router-dom'

const container = {
    height:'100vh',
    width:'100vw',
    background : 'url(bank.avif)',
    backgroundRepeat : 'no-repeat',
    backgroundSize : 'cover'
}

const loginForm= {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    color:'white',
    float:'right',
    paddingRight:'150px',
    paddingTop:'20%'
}
const loginItems = {
    margin: '10px',
    alignItems:'center'   
}
const button = {
    borderRadius : '10px',
    width:'80px',
    alignSelf :'center',
    margin:'10px'
}

const Login = () => {
    const {login,isAuthenticated} = useAuth()
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();
   useEffect(()=>{
    if(isAuthenticated)  navigate('/homeloans');
   })

  return (
    <div  style={container}>
        {!isAuthenticated ? 
        <div style={loginForm}>
            <span style={{textAlign:'center'}}>Login</span>
        <br/>
        <label style={loginItems}> User Name <input type='text' onChange={(e)=>setUserName(e.target.value)}/>  </label> 
        <label style={loginItems}> Password <input type='password' style={{marginLeft:'10px'}} onChange={(e)=>setPassword(e.target.value)}/> </label> 
        <button onClick={()=>{login(userName,password)}} style={button}>Login</button>
       </div> : '' }
    </div>
  )
}

export default Login