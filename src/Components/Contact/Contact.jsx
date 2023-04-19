import React from 'react'
import classes from './Contact.module.css'
import Button from './Button'

const Contact = () => {
  return (
    <div className={classes.container}>
        <h2 className={classes.title}>We offer all kinds of IT services that <br/> ensure your success</h2>
        <div>
            <Button content="Contact us" />
            <Button content="Let's Talk" />
        </div>
    </div>
  )
}

export default Contact