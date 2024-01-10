import React from 'react'
import Navbar from './Navbar'

function ContactUs({user,handleLogOut}) {
  return (
    <>
    <Navbar 
    user={user}
    handleLogOut={handleLogOut}
    />
    <h1 className='heading white-font'>Contact Us</h1>
    <p className='white-font'>We can be reached at: <br/>
        Ph: +91 9476652089<br/>
        Email: bishalpaul34@gmail.com
    </p>
    </>
  )
}

export default ContactUs