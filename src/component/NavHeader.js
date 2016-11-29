import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className='nav-header'>
        <button type="button" class="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back
        </button>
        <h3>Ableshi@Home</h3>
          <button type="button" class="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-headphones" aria-hidden="true"></span>
          </button>
      </div>
    )
  }
}

export default NavHeader;
