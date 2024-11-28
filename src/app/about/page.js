import React from 'react'

const page = async () => {
  const getData = async () => {
    let res = await fetch("http://localhost:3000/api");
    return res.json()
  }
  const data = await getData();
  return (
    <div>
      <div><h1 className='text-2xl bg-slate-400 text-white text-center'>AVAILABLE DATA !</h1></div>
      {data.messga.map((item, i) => {
        return (
          <div key={i}>

            <div className='bg-blue-400 p-4 text-yellow-700'>
              <h1 className='bg-red-300'>THE NAME OF MODEL IS : {item.name}</h1>
              <h2>THE PRICE IS : {item.price}</h2>
              <h2>COMPANY : {item.company}</h2>
              <h2>COLOR : {item.color}</h2>
              <br />
              <hr />

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default page