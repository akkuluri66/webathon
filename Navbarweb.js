import React from 'react'
import './Navbarweb.css'
import { Link } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";
import Dropdown from 'react-bootstrap/Dropdown';
import { VscSearch } from "react-icons/vsc";
function Navbar() {
  return (
  <div className='par'>
    <div className='par1'>
    <ul className='nav child'>
    <form className="d-flex" role="search">
        <input className="form-control inp" type="search" placeholder="Search" aria-label="Search"/>
        <button className="b1" type="submit"><span className='icon'><VscSearch/></span></button>
      </form>
        <li className='nav-item'>
    <Link className='nav-link navbar-brand' to="/Login"><span className='login'>Login</span></Link>
        </li>
        <li className='nav-item'>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" className='drop'>
      <span className='sum'><RxAvatar size={'1.5em'}/></span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Account</Dropdown.Item>
        <Dropdown.Item href="/">Leaderboard</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </li>

      </ul>
</div>
   </div> 
  )
}

export default Navbar