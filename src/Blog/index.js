import React from 'react';
import axios from 'axios';
import Blogcard from '../component/Blogcard.js';
import Loading from '../component/Loading.js';

class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/ableshi/08-demo/master/data/blogcard.json')
      .then( res => this.setState({data:res.data,wait:false}) )
      .cath( err=> alert(error))
  }


  render(){
    return(
      <div className='blog-warp'>
        {this.state.wait ? <Loading /> :
          this.state.data.map( (item,i) => <Blogcard {...item} key={i}/>)
        }
      </div>
    )
  }
}

export default Blog;
