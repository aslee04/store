import React from 'react'
import './button.css'

const Button = ({children}) => {
  return (
    <button type='button' className='button' id='search button'>{children}</button>
  )
}

export default Button