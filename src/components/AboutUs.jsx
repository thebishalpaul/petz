import React from 'react'
import Navbar from './Navbar'

function AboutUs({user,handleLogOut}) {
  return (
    <>
    <Navbar 
    user={user}
    handleLogOut={handleLogOut}
    />
    <h1 className='heading white-font'>About Us</h1>
    <p className='white-font'>Petz is an online, searchable marketplace of pets that needs a loving home. Not only this using the website users can shop pet care items. From the comfort of their personal computers, pet lovers can search for a pet that best matches their needs.</p>
    </>
  )
}

export default AboutUs