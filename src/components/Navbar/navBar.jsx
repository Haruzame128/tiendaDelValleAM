import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"
import NavItem from './NavItem/NavItem'
import { categories} from '../../mock/mockData'
import logo from '../../Imagenes/logo.png'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
            <Navbar.Brand>
                <Link to='/'>
                    <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top mx-4"/>
                </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                {
                    categories.map((element) => {
                        return <NavItem key={element} name={element}/>
                    })
                }
            </Nav>
            <CartWidget />
    </Navbar>
  )
}

export default NavBar