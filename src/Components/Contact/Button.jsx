import React from 'react'
import classes from './Button.module.css'

const Button = ({content}) => {
  return (
    <>
    <button className={classes.btn}>{content}</button>
    </>
  )
}

export default Button