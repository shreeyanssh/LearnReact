import React from 'react'
import {Link, Outlet} from 'react-router-dom'


const User = () => {
  return (
    <div className="w-1/2 m-auto ">
      <h1 className="text-5xl mb-4 text-rose-500">User</h1>
      
      <div className='flex flex-col  text-xl  text-center'>

        <Link className="p-1 bg-red-200 rounded-md m-2 hover:bg-red-300" to="/user/tommy">Tommy</Link>
        <Link className="p-1 bg-red-200 rounded-md m-2 hover:bg-red-300" to="/user/ryan">Ryan</Link>
        <Link className="p-1 bg-red-200 rounded-md m-2 hover:bg-red-300" to="/user/john">John</Link>
        
      </div>

      <hr />

      <Outlet/>
    </div>
  )
}

export default User
