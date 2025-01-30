"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState()

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                alert(result.message)
                console.log(result)
            })

            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-4xl rounded-3xl items-center my-16  border-4 border-blue-600 p-8 gap-4 flex flex-col '>
            <h1 className='text-center text-4xl text-slate-800 font-bold flex flex-col justify-center' >Generate Your Compress Link</h1>

            <div className='flex flex-col text-center items-center  w-3/4  rounded-full  gap-3'>
                <input
                    className='border-2   border-black w-2/4 mt-6 bg-slate-200 focus:outline-blue-700 rounded-2xl px-4 py-2'
                    type="text"
                    placeholder='Enter Your URL'
                    value={url}
                    onChange={e => { seturl(e.target.value) }}
                />
                <input
                    className='border-2  border-black w-2/4 bg-slate-200 focus:outline-blue-700 rounded-2xl py-2 px-4'
                    type="text"
                    placeholder='Enter Your Preafered short URL'
                    value={shorturl}
                    onChange={e => { setshorturl(e.target.value) }}
                />
                <button
                    onClick={generate}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-900 focus:outline-none w-1/4 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-4 text-center  me-2 mb-3 dark:bg-blue-700 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Generate
                </button>
            </div>
            {generated && <>
                <span className='font-bold'>Your Link</span>
                <code><Link target='_blank' href={generated} > {generated} </Link>
                </code>
            </>}
        </div>
    )
}

export default Shorten
