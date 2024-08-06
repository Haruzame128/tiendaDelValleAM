import React from 'react'

const MlItem = ({name}) => {
  return (
    <>
      <Nav.Link >
        <NavLink to={`/${name}/${name}`} className={'nav-link'}>{name}</NavLink>
      </Nav.Link>
    </>
  )
}

export default MlItem