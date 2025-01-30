import React from 'react'
import Link from 'next/link'

const contact = () => {
  return (
    <div>

      <h1 className='w-full  text-center justify-center font-bold text-4xl p-6 '> CONTACT US </h1>
      <h2 className='w-full text-center font-bold '> Contact Us For any kind of Problem  like <span className='text-blue-600'>LINK COMPRESSOR </span>  or any other problem related to this website </h2>
      <p className='w-full text-center font-bold'> Email : <span className='text-blue-600'> amitkumarpatraaa@gmail.com </span> </p>
      <p className='w-full text-center font-bold'> Phone : <span className='text-blue-600'> 8144129955 </span> </p>
      <p className='w-full p-4 text-center font-semibold'><Link target='_blank' href={"https://linktr.ee/amitkumarpatra99"}> < button className="text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Contact Us</button></Link></p>

    </div>
  )
}

export default contact
