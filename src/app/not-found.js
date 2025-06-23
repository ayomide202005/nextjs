import React from 'react'
import Link from "next/link";

const Notfound = () => {
  return (
    
    <div className='flex flex-col itmes-center justify-center min-h-screen p-4'>
        <h1 className='text-4xl font-bold mb-4'>404</h1>
        <p className='text-xl'>this page is not available</p>
        <Link href='/' className='mt-6 px-4 py-2 bg-blue-400 text-white rounded'>return home</Link>
    </div>
  )
}

export default Notfound