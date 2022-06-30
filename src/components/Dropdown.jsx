import React, { useState } from 'react';
import { DropDownItems } from './DropDownItems';
import './css/Dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {DropDownItems.map((item, index) => {
          return (
            <li key={index}>     
                <a className={item.cName} href={item.path} target="_blank" onClick={() => setClick(false)}>      
                  {item.title}
                </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;