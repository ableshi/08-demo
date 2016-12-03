import React, { PropTypes } from 'react'
import img from '../img/6.png'
class NoMatch extends React.Component {
  render () {
    return(
      <div>
        <h1>您访问的页面不存在</h1>
        {img}
      </div>
    )
  }
}

export default NoMatch;
