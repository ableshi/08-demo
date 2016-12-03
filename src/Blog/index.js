import React, { PropTypes } from 'react'
import Blogcard from '../component/Blogcard.js'
let data =[
  {index:1,title:'hello1',desc:'111'},
  {index:2,title:'hello2',desc:'222'},
  {index:3,title:'hello3',desc:'333'}
]
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
