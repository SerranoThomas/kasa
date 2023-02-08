import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


import logo from '../../assets/LOGO.svg'


function Header() {
    return (
        <header>
        <nav className='kasa__navbar'>
            <img src={logo} alt='logo-kasa'/>
            <ul className='kasa__navbar-links'>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A Propos</Link></li>
            </ul>
        </nav>
        <Outlet /> 
        </header>
        
    )
}

export default Header