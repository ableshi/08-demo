import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class NavFooter extends React.Component {
  render () {
    return(
      <div className='my-footer'>
        <Link to='/' activeStyle={{color:'purple'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br />
                Home</Link>
              <Link to='blog' activeStyle={{color:'purple'}}><span className="glyphicon glyphicon-th-large" aria-hidden="true"></span><br/>
                Blog</Link>
              <Link to='about/' activeStyle={{color:'purple'}}><span className="glyphicon glyphicon-heart" aria-hidden="true"></span><br/>
                About</Link>
              <Link to='work/' activeStyle={{color:'purple'}}><span className="glyphicon glyphicon-lock activeStyle={{color:'purple'}}" aria-hidden="true"></span><br/>
                Work</Link>
      </div>
    )
  }
}

export default NavFooter;
