import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // console.log(data);
    
  return (
    <div className='text-center text-3xl bg-cyan-300'> Github Followers: {data.followers}
    <img src={data.avatar_url} alt="logo" width={300} /></div>

  )
}

export {Github}
export const githubInfoLoader = async ()=>{
const response = await fetch("https://api.github.com/users/raviswamy777");
// console.log(response.json());

return response.json();
}