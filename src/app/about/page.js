import React from 'react'

const page = async() => {
  const getData = async () => {
      let res = await fetch("http://localhost:3000/api");
      return res.json()
  }
  const data = await getData()
  console.log(data)
    return (
    <div>
        <div><h1>DATA PAGE !</h1></div>
    {data.messga.map((item,i)=>{
        return (
            <div key={i}>{item.color}</div>
        )
    })}
    </div>
  )
}

export default page