import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import './navbar.css'
import React from 'react'

import { links } from '../data.js'

import { GoThreeBars } from "react-icons/go/index.esm.js";
import { HiOutlineX } from "react-icons/hi/index.esm.js";
import { AiOutlineArrowUp } from "react-icons/ai/index.esm.js"
import { FaUserAlt } from "react-icons/fa/index.esm.js"
import { RiShoppingCart2Fill } from "react-icons/ri/index.esm.js"

import { useState } from 'react';


const Navbar = () => {
  const [list, setList] = useState(false)

  const manages = () => {
    setList(false)
  }

  return (
    <nav id='nav' className='m-navbar'>
      <div className="container">
        <Link to='/' onClick={() => setList(false)} className="logo">
          <span>BODYMAKE</span>
        </Link>
        <ul className={`nav__links ${list ? 'show__list' : 'hide__list'}`}>
          {links.map(({name, path}, index) => {
            return (
              <li key={index} >
                <NavLink onClick={() => manages(name)} to={path} className={({isActive}) => isActive ? "nav-active" : ""}>
                  {name} 
                </NavLink>
              </li>
            )
          })}
        </ul>
          <div className="navbar-right-big-pic">
            <Link className='signup-btn1' to='/card'>
              Card
            </Link>
            <Link className='signup-btn1' to='/signup'>
              Signup
            </Link>
          </div>
          
        <div className="navbar-right">
          <Link onClick={() => setList(false)} className='signup-btn' to='/card'>
            Card
          </Link>
          <Link onClick={() => setList(false)} className='signup-btn' to='/signup'>
            Signup
          </Link>
          <button onClick={() => setList(!list)} className='toggle-btn'>
            {list ? <HiOutlineX id='hamber' /> : <GoThreeBars id='hamber' />}
          </button>
        </div>
        <HashLink to='#header' className="gotop-btn">
          <AiOutlineArrowUp/>
        </HashLink>
      </div>
    </nav>
  )
}


export default Navbar

