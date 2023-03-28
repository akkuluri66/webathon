import React from 'react'
import { Dropdown } from 'react-bootstrap'
import {AiOutlineMenu} from "react-icons/ai";
import loc from './images/loc.jpg'
import './Location.css'
import { BsFillMicFill } from "react-icons/bs";
function Location() {
  return (
    <div>
         <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      <span className='sum'><AiOutlineMenu/></span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/newblog">Locations</Dropdown.Item>
        <Dropdown.Item href="/">Calculator</Dropdown.Item>
        <Dropdown.Item href="/">Products</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div className='loc1'>
    <input type="text" placeholder="search " className='pos'/>
    <span className='lt'><BsFillMicFill size={'1.5em'}/></span>
    </div>
    <img src={loc} className="card-img-top loc"/>

    

    </div>
  )
}

export default Location