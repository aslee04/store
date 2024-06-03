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
                <li className=''>
                    <Link to='#' className='text-base uppercase'>New in</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase'>Apparel</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase'>Plus size</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase'>Accessories</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase'>Restocked</Link>
                </li>
            </ul>

            <div className='mr-[140px]'>
                <img src={logo} alt={'Logo'} />
            </div>

            <ul className='flex flex-wrap justify- items-center gap-5'>
                <li className=''>
                    <Link to='' className='flex gap-3 items-center text-base uppercase'>
                        Search <FaSearch />
                    </Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase'>Restocked</Link>
                </li>
                <li className=''>
                    <Link to='#' className='text-base uppercase'>Restocked</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header