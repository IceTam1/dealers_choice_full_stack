import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ flowers, location: {pathname} })=> {
  return (
    <nav>
      <Link to='/'>HOME</Link>
      <Link to='/flowers'>FLOWERS</Link>
      
    </nav>
  )
}

export default connect(
    state => state
)(Nav);