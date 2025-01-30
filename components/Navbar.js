import Link from 'next/link'
import React from 'react'
import Shorten from '@/app/Shorten/page'
const Navbar = () => {
    return (
        <nav className=' h-16 bg-slate-900 text-cyan-300 flex px-3 justify-between items-center '>

            <div className="logo text-lg font-bold text-white">
                <Link href="/">LINK Compressor</Link> </div>

            <ul className='flex justify-center gap-4 items-center '>
                <Link href="/"><li>Home</li></Link>
                <Link href={"/about"}><li>About</li></Link>
                <Link href="/Shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>

                <li className='gap-2 flex  mt-2'>

                    <Link href="/Shorten">
                        <button type="button" className="text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Try Now</button>
                    </Link>

                    <Link href="/github">
                        <button target='_blank' type="button" className="text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Git hub</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar


