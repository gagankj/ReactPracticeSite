import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Github() {
    const [follower,setFollower]=useState(0)
    const [image,setImage]=useState("")
    const [user,setuser]=useState("")
    const [profile,setProfile]=useState("")
    useEffect(()=>{
        async function fetchData(){
            const response=await axios.get(`https://api.github.com/users/${user}`)
            setFollower(response.data.followers)
            setImage(response.data.avatar_url)
            setProfile(response.data.html_url)
        }
        fetchData()
    },[setFollower,setuser,user])
  return (
    <div className=" bg-white flex flex-col items-center p-10 h-screen w-screen">
        <input onChange={(e)=>setuser(e.target.value)} className='bg-black mb-10 h-16 rounded-xl p-5 w-80 text-center text-2xl text-blue-600' placeholder='enter your username' type="text" />
        <div className="h-96 bg-black p-5    "><img className='h-2/3 rounded-full' src={image} alt="" /> 

        <div className='text-3xl text-white text-center'>Followers : {follower}</div>
        <div className='text-3xl text-white text-center'> <a className='text-xl underline text-blue-600' href={profile}>Profile Link</a></div>
           </div>
    </div>
  )
}

export default Github