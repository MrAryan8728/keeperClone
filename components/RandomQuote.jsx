'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Qutoes = () => {
  const [quote, setquote] = useState([])

  const getQuote = async() => {
    const data = await axios.get("https://api.quotable.io/quotes/random");
    setquote(data.data[0])
  }

  useEffect(() => {
    getQuote();
  }, [])
  return (
    <div className=' h-screen grid place-items-center'>
      <div className=' bg-gray-200 m-20 rounded-md shadow-lg shadow-white'>
        <p className=' text-4xl items-center justify-center p-3 font-bold text-black'>{quote.content}</p>
        <p className=' text-2xl p-3 text-blue-400 font-bold'>{quote.author}</p>
        <button className=' text-xl px-3 py-2 bg-black text-white m-3 rounded-md font-bold' onClick={getQuote}>Next</button>
      </div>
    </div>
  )
}

export default Qutoes