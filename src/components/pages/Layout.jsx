/* eslint-disable react/prop-types */
import NavBar from '../Navbar/navBar';
/*import Footer from '../Footer/Footer';*/


const Layout = ({children}) => {
  return (
    <>
        <NavBar />
          {children}
        
    </>
  )
};

export default Layout