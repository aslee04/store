import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-[190px] mb-[44px]'>
      <hr className='mb-[94px]' />
      <div className='flex justify-between row'>
        <div className='col-6'>
          <div className='flex justify-between items-center row gap-14'>
            <div className='col-4'>
              <ul className=''>
                <li className=''>
                  <a href="mailto:customersupport@ovroe.com" className='underline'>customersupport@ovroe.com</a>
                </li>
                <li className=''>
                  <a href="tel:702-462-7281" className='underline'>702-462-7281</a>
                </li>
                <li className=''>
                  <p className=''>9550 S Eastern Ave ste 253-A102 <br /> Las Vegas NV 89123</p>
                </li>
                <li className='mt-[93px]'>
                  <p className=''>Copyright © 2021, OVROE - Online Fashion</p>
                </li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className=''>
                <li className=''>
                  <Link to='#' className='hover:underline'>About Us</Link>
                </li>
                <li className=''>
                  <Link to='#' className='hover:underline'>Contact Us</Link>
                </li>
                <li className=''>
                  <Link to='#' className='hover:underline'>Shipping Info</Link>
                </li>
                <li className=''>
                  <Link to='#' className='hover:underline'>Returns Info</Link>
                </li>
                <li className='mt-[93px]'>
                  <Link to='instagram.com/aslee03' className='hover:underline'>Instagram</Link>
                </li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className=''>
                <li className=''>
                  <Link to='#' className='hover:underline'>Terms of Service</Link>
                </li>
                <li className=''>
                  <Link to='#' className='hover:underline'>Refund policy</Link>
                </li>
                <li className=''>
                  <Link to='#' className='hover:underline'>Privacy policy</Link>
                </li>
                <li className=''>
                  <Link to='#' className='hover:underline'>Cookies</Link>
                </li>
                <li className='mt-[93px]'>
                  <Link to='#' className='hover:underline'>Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <h4 className='font-normal text-[26px]'>
            Subscribe to our newsletter
          </h4>
          <input type="email" className='mt-[34px] p-3 border-none w-full' id='email' placeholder='Email' />
        </div>
      </div>
    </div>
  )
}

export default Footer