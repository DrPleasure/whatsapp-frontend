import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
    <li> <Link  to="/">Home </Link></li>
    <li> <Link  to="/login">Login </Link> </li>
    <li><Link  to="/register">Register </Link></li>
    <li><Link  to="/chatRoom">ChatRoom  </Link></li>
    <li><Link  to="/chats">Chats  </Link></li>
   </ul>
    </div>
  ) 
}

export default Navbar