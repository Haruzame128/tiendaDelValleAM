import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

const NavItem = ({name}) => {
  return (
    <>
      <Nav.Link >
        <NavLink to={`/${name}`} className={'nav-link'}>{name}</NavLink>
      </Nav.Link>
    </>
  )
}

export default NavItem
