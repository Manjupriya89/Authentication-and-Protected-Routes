import { Link, Outlet } from 'react-router-dom'
import useAuth from '../hooks/CustomAuth'


const container ={
  height : '40px',
  width : '100vw',
  border : '1px solid black',
  backgroundColor:'#eee',
  marginTop:'10px',
  paddingTop:'15px',
}
const navItems = {
  paddingRight :'30px',
  float : 'right', 
}
 const title={
  color: 'darkred',
  fontStyle: 'italic',
  paddingLeft: '15px'
 }

const NavBar = () => {
  const {isAuthenticated,logout} = useAuth()


  return (
    <div>
        <div style={container}>
        <span style={title}>XYZ Banking</span>
        <Link to='/homeloans' style={navItems}>Home Loans</Link>
        <Link to='/myaccount' style={navItems}>My Account</Link>
        <Link to='/banking' style={navItems}>Banking</Link>
       {isAuthenticated ? <Link onClick={logout} style={navItems}>Logout</Link> : <Link to='/login' style={navItems}>Login</Link>}
      
        </div>
        <Outlet/>
    </div>
  )
}

export default NavBar