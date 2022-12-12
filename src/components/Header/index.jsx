import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


import logo from '../../assets/LOGO.svg'


const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    
`

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20%;
    gap: 20%;
    padding-left:0%;
    list-style: none;
`

// a mettre en composant dans le dossier styles
const NavLinks = styled(Link)`
    color: #FF6060;
    text-decoration: none;
    display: flex;
    flex-wrap: no-wrap;
   
`

 
function Header() {
    return (
        <header>
        <Navbar className='kasa-navbar'>
            <img src={logo} alt='logo-kasa'/>
            <NavList className='kasa-navbar-links'>
                <li><NavLinks to="/">Accueil</NavLinks></li>
                <li><NavLinks to="/about">A Propos</NavLinks></li>
            </NavList>
        </Navbar>
        <Outlet /> 
        </header>
        
    )
}

export default Header