import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
    console.log(userid);
    
  return (
    <div className='text-center text-3xl bg-cyan-300'> User: {userid}
   </div>
  )
}

export default User