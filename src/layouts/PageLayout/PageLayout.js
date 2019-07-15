import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Library Management System</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' | '}
     <Link to='/book' activeClassName='page-layout__nav-item--active'>Book</Link>
     {' | '}
    <Link to='/student' activeClassName='page-layout__nav-item--active'>Student</Link>
    {' | '}
    <Link to='/issue' activeClassName='page-layout__nav-item--active'>Book Issue</Link>
    {' | '}
    <Link to='/mgmt' activeClassName='page-layout__nav-item--active'>Management</Link>
    
    
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
