import React, { PropTypes } from 'react'
import Blogcard from '../component/Blogcard.js'

class Blog extends React.Component {
  render () {
    let cards=data.map( (item,i) => <Blogcard {...item} key={i} />)
    return(
      <div className='blog-warp'>
        {cards}
      </div>
    )
  }
}

export default Blog;
