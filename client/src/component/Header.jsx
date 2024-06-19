import React from 'react'
import { logo } from '../assets'
import { Link  } from 'react-router-dom'

 const Header = () => {
  return (
    <header className='w-full flex justify-between items-center  sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-slate-800 bg-slate-50 dark:bg-slate-800'>
    <Link to="/">
      <h1 className='txt-primary'>OMG AI </h1>
    </Link>
    <Link to="/create-post"
    className='font-inter font-medium bg-[#6469ff] text-white
     px-4 py-2 rounded-md'
    >
      Create
    </Link>
    </header>
  )
}

export default Header 