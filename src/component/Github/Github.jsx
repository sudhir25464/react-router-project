import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState("");

    useEffect(() => {
      fetch('https://api.github.com/users/sudhir25464')
     .then(responce =>responce.json())
     .then((data)=>{

        console.log(data);
        setData(data);
     })
    }, [])
    
  return (
  <div className='flex bg-slate-700 p-5  justify-center  m-5 text-white '>
    <div className='border p-4 flex'>
      <img className='rounded'  width={200} src={data.avatar_url}></img>
      <div className='mx-5 p-4'>
      <h4 className='text-4xl font-medium'>followers  {data.followers}</h4>
      <h5 className='text-lg font-semibold pt-4'>Name  {data.name}</h5>
      <h5 className='text-lg font-thin pt-3'>Location :{data.location}</h5>
      </div>
      </div>

    
  </div>
  )
}

export default Github
