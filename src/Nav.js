import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ flowers, location: {pathname} })=> {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/flowers'>Flowers</Link>
      
    </nav>
  )
}

export default connect(
    state => state
)(Nav);