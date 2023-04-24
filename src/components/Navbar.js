import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import './navbar.css'
import React from 'react'

import { links } from '../data.js'

import { GoThreeBars } from "react-icons/go/index.esm.js";
import { HiOutlineX } from "react-icons/hi/index.esm.js";
import { AiOutlineArrowUp } from "react-icons/ai/index.esm.js"

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSignin } from '../store/signinSlice.js';


const Navbar = () => {
  const signin = useSelector((state) => state.signin)
  console.log(signin.signinInfo)

  const dispatch = useDispatch()


  const [list, setList] = useState(false)
  const [acount, setAcount] = useState(false)

  const manages = () => {
    setList(false)
  }

  const handleClear = () => {
    dispatch(clearSignin())
    window.location.reload();
  }

  return (
    <nav id='nav' className='m-navbar'>
      <div className="container">
        <Link to='/' onClick={manages} className="logo">
          <span>BODYMAKE</span>
        </Link>
        <ul className='nav__links'>
          {links.map(({name, path}, index) => {
            return (
              <li key={index} >
                <NavLink to={path} className={({isActive}) => isActive ? "nav-active" : ""}>
                  {name} 
                </NavLink>
              </li>
            )
          })}
        </ul>
        <ul className={list ? 'show__list' : 'hide__list'}>
          {links.map(({name, path}, index) => {
            return (
              <li key={index} >
                <NavLink to={path} onClick={manages}>
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
          {!signin.signinInfo &&
            <Link className='signup-btn1' to='/signup'>
              Signup
            </Link>
          }
          {signin.signinInfo &&
            <div className='acount-div'>
              <Link onClick={() => setAcount(!acount)} className='signup-btn1' to='/'>
                Account
              </Link>
              {signin.signinInfo &&  acount &&   
              <ul className='acount-info'>
                <li><h2>Acount Info</h2></li>
                <li>
                  <p>
                    <h3>username:</h3>
                    <p>{signin.signinInfo.user}</p>
                  </p>
                </li>
                <li>                    
                  <p>
                    <h3>password:</h3>
                    <p>{signin.signinInfo.pass}</p>
                  </p>
                </li>
                <li className='sign-out' onClick={handleClear}>Sign out</li>
              </ul>
              }
            </div>         
          }
        </div>
        <div className="navbar-right">
          <Link className='signup-btn' to='/card'>
            Card
          </Link>
          {!signin.signinInfo &&
            <Link className='signup-btn' to='/signup'>
              Signup
            </Link>
          }
          {signin.signinInfo &&
            <div className='acount-div'>
              <Link onClick={() => setAcount(!acount)} className='signup-btn' to='/'>
                Account
              </Link>
              {signin.signinInfo &&  acount &&   
                <ul className='acount-info'>
                  <li><h2>Acount Info</h2></li>
                  <li>
                    <p>
                      <h3>username:</h3>
                      <p>{signin.signinInfo.user}</p>
                    </p>
                  </li>
                  <li>                    
                    <p>
                      <h3>password:</h3>
                      <p>{signin.signinInfo.pass}</p>
                    </p>
                  </li>
                  <li className='sign-out' onClick={handleClear}>Sign out</li>
                </ul>        
              }
            </div> 
          }
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

