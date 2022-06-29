import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Dropdown from './Dropdown';

function Navbar({setOpenPopup,user,handleLogOut}) {
    const [toggle,setToggle] = useState(false);
    const [dropdown,setDropdown]= useState(false);
    
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };

    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

    return (
    <>  
    <div className='first_navbar white-font'>
        <div className="logo white-font">
              <Link className="white-font" to="/">
                  <h2>Petz</h2>
               </Link>
        </div>

        <div className="loginSignUp">
          {
          user&&<>
              <Link style={{fontWeight: "bold"}} to="/AddPet">
                  Add Pet
              </Link>

              <Link style={{fontWeight: "bold"}} to="/MyAds">
                  My Ads
              </Link>
              
            <PersonIcon/><span className="user-email">{user.email}</span>
          <button className="nav-btn" onClick={handleLogOut}>
              LogOut
          </button></>
          }
        
          {!user&&<>
            <button className="nav-btn" onClick={()=>setOpenPopup(true)}>Log In/Sign Up</button>
            </>} 
           
        </div>
        <div className="hamburger">
            <a href="#" onClick={()=>{
                setToggle(!toggle)
                }
             }>
          {
          toggle? <CloseIcon sx={{fontSize:40}}/> 
            : <GiHamburgerMenu size={40}/>
          }
            </a>
        </div>
    </div>
    <div className={toggle?"second_navbar mobile_navbar":"second_navbar"}>
        <ul>
            <li 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <a href={"https://www.amazon.in/s?k=pet+products+for+dogs&sprefix=pet+pro%2Caps%2C3144&ref=nb_sb_ss_ts-doa-p_1_7" }target="_blank">
              Dog Care <ArrowDropDownCircleIcon className="arrowIcon"/>
            </a>
            {dropdown && <Dropdown/>}
            </li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">ContactUs </a></li>
        </ul>
    </div>
   {
   (toggle)?  
    <div className="second_navbar mobile_navbar extraNav">
        {user&&<ul>
        <button className="nav-btn" onClick={handleLogOut}>LogOut</button>
        </ul>}
        {!user&&<>
            <button className="nav-btn" onClick={()=>setOpenPopup(true)}>Log In/Sign Up</button>
            </>} 
    </div> : ""
  }
    </>
  );
}

export default Navbar;