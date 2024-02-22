import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='m-10 flex justify-center gap-20 text-xl '>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Nav
