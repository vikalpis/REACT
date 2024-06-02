import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const[ data, setdata] = useState([])
    useEffect (()=> {
        fetch('https://api.github.com/users/vikalpis/followers')
        .then(res => res.json)
        .then(data => {
            console.log(data);
            setdata(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github follower : {data.follower}
    <img src={data.avatar_url} alt="Git Picture"  /></div>
  )
}

export default Github

// export const githubINfoloader = async()=> {
//    const response = await fetch('https://api.github.com/users/vikalpis')
//    return response.json()
// }