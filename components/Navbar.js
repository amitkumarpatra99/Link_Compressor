import Link from 'next/link'
import React from 'react'
const Navbar = () => {
    return (
        <nav className=' h-16 bg-slate-800 text-white flex px-3 justify-between items-center '>

            <div className="logo text-2xl font-bold text-white hover:text-cyan-400 ">
                <Link href="/">LINK COMPRESSOR</Link> </div>

            <ul className='flex justify-center gap-4 items-center font-semibold '>
                <Link className='hover:font-bold  hover:text-cyan-300 ' href="/"><li>Home</li></Link>
                <Link className='hover:font-bold hover:text-cyan-300 ' href="/about"><li>About</li></Link>
                <Link className='hover:font-bold hover:text-cyan-300 ' href="/contact"><li>Contact Us</li></Link>
                <Link className='hover:font-bold hover:text-cyan-300 ' href="/Shorten"><li>Compress</li></Link>

                <li className='gap-2 flex mt-2'>

                    <Link href="/Shorten">
                        <button type="button" className="text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Try Now</button>
                    </Link>

                    <Link href="/github">
                        <button target='_blank' type="button" className="text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Git Hub</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar


