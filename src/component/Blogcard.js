import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
class Blogcard extends React.Component {
  constructor(){
    super()
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){}
  render () {
    return(
      <div className='blog-card'>
        <div className='blog-index'><span>{this.props.index}</span></div>
        <div className='blog-content clearfix'  >
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          <RaisedButton label="查看更多" secondary={true}
            href={`#/item/${this.props.url}`}/>
        </div>
      </div>
    )
  }
}
Blogcard.defaultProps={
  index:1,
  title:'我是默认标题',
  desc:'我是默认介绍'
}
Blogcard.defaultTypes={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  desc:React.PropTypes.string
}
export default Blogcard;
