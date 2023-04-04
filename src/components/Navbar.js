import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import './navbar.css'
import logo from '../images/logo.png'
import React from 'react'

import { links } from '../data.js'

import { GoThreeBars } from "react-icons/go/index.esm.js";
import { HiOutlineX } from "react-icons/hi/index.esm.js";
import { AiOutlineArrowUp } from "react-icons/ai/index.esm.js"

import { useState } from 'react';


const Navbar = () => {
  const [list, setList] = useState(false)

  const manages = () => {
    setList(false)
  }

  return (
    <nav id='nav' className='m-navbar'>
      <div className="container">
        <Link to='/' onClick={() => manages("Home")} className="logo">
            <img src={logo} alt='Nea Logo'/>
        </Link>
        <ul className={`nav__links ${list ? 'show__list' : 'hide__list'}`}>
          <div className="navbar-right-big-pic">
          <Link className='sinup-btn1' to='/card'>
            <button className='signup-btn1'>
              <h4>card</h4>
            </button>
          </Link>
          <Link className='sinup-btn1' to='/signup'>
            <button className='signup-btn1'>
              <h3>sign up</h3>
            </button>
          </Link>
          </div>
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
        <div className="navbar-right">
          <Link className='sinup-btn' to='/card'>
            <button className='signup-btn'>
              <h3>card</h3>
            </button>
          </Link>
          <Link className='sinup-btn' to='/signup'>
            <button className='signup-btn'>
              <h3>sign up</h3>
            </button>
          </Link>
          <button onClick={() => setList(!list)} className='toggle-btn'>
            {list ? <HiOutlineX id='hamber' /> : <GoThreeBars id='hamber' />}
          </button>
        </div>
        <HashLink to='#nav' className="gotop-btn">
          <AiOutlineArrowUp/>
        </HashLink>
      </div>
    </nav>
  )
}


export default Navbar

