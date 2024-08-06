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
    <>
    
         <Navbar bg="light" data-bs-theme="light">
            <Container>
            <Navbar.Brand>
                <Link to='/'>
                    <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
                </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                {
                    categories.map((element) => {
                        return <NavItem key={element} name={element}/>
                    })
                }
            </Nav>
            </Container>
        </Navbar>


        {/*<nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link to='/'>
                <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        categories.map((element) => {
                            return <NavItem key={element} name={element}/>
                        })
                    }
                </ul>
                </div>
            </div>
            <CartWidget />
            </nav>*/}
    </>
  )
}

export default NavBar