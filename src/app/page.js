import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      
    <div className='bg-black text-white text-2xl text-center'>HOME PAGE</div>
    <Link href={"./about"}> Post </Link>
    </div>
  )
}

export default page