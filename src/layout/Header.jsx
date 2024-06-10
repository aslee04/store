import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from '../components/Button'
import { FaSearch } from "react-icons/fa"

const Header = () => {
  return (
    <header className='my-6'>
        <nav className='flex justify-between items-center'>
            <ul className='flex flex-wrap justify- items-center gap-5'>
                <li className='transition-all duration-200'>
                    <Link to='#' className='text-base uppercase hover:underline'>New in</Link>
                </li>
                <li className=''>
                    <Link to={"Catalog"} className='text-base uppercase hover:underline'>Apparel</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase hover:underline'>Plus size</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase hover:underline'>Accessories</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase hover:underline'>Restocked</Link>
                </li>
            </ul>

            <div className=''>
                <img src={logo} alt={'Logo'} />
            </div>

            <ul className='flex flex-wrap justify- items-center gap-5'>
                <li className='flex justify-between items-center'>
                    <input type="search" className='p-2' placeholder='Search' />
                    <FaSearch />
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase hover:underline'>sign in</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase hover:underline'>Cart 0</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header