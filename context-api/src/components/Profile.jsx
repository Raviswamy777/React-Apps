import React, {useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <h1>Please add the Username and Password</h1>
  return (
    <div><h1>Profile : {user.userName}</h1></div>
  )
}

export default Profile