import React from 'react'
import cn from 'classnames'
import './button.css'

const Button = ({type = 'button', variant, className, children, ...props}) => {
  return (
    <button type={type} className={cn('button', className, {
      'btn-outline': variant === 'outline'
    })} {...props}>{children}</button>
  )
}

export default Button
