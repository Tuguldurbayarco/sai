"use client";
import React from 'react'
import './button.css'

const Button = ({ children, ...props}: any) => {
  return (
    <button className='myButton' onClick={props.onClick} {...props} >
      {children}
    </button>
  )
}

export default Button