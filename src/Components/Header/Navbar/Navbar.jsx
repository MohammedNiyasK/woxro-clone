import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
        <ul className={classes.container}>
          <li className={classes.navbar_text}>Home</li>
          <li className={classes.navbar_text}>About Us</li>
          <li className={classes.navbar_text}>Services</li>
          <li className={classes.navbar_text}>Technology</li>
          <li className={classes.navbar_text}>Careers</li>
          <li className={classes.navbar_text}>Blog</li>
          <li className={classes.navbar_text}>Our Works</li>
          <li className={classes.navbar_text}>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar