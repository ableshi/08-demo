import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class LeftNav extends React.Component {
  render () {
    return(
      <div className='leftnav-wrap'>
        <h3>Ableshi@{this.props.title}</h3>
        <Link to='/' activeStyle={{backgroundColor:'rgba(225,0,0,0.3)'}} onlyActiveOnIndex={true}>Home</Link>
        <Link to='/blog' activeStyle={{backgroundColor:'rgba(225,0,0,0.3)'}}>Blog</Link>
        <Link to='/work' activeStyle={{backgroundColor:'rgba(225,0,0,0.3)'}}>Work</Link>
        <Link to='/about' activeStyle={{backgroundColor:'rgba(225,0,0,0.3)'}}>About</Link>
      </div>
    )
  }
}

export default LeftNav;
