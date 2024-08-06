import React from 'react'
import NavBar from '../Navbar/navBar';
import Footer from '../Footer/Footer';


const Layout = ({children}) => {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
  
};

export default Layout