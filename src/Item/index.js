import React from 'react';

import marked from 'marked';
import axios from 'axios';
import hljs from 'highlight.js'
import Loading from '../component/Loading';
class Item extends React.Component{
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address = this.props.params.title;
    // console.log(address);
    axios.get( `https://raw.githubusercontent.com/ableshi/08-demo/master/data/${address}.md`)
      .then( res => this.setState({data:res.data}) )
      .catch( err => alert(err))
  }
  render(){
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
  }
});
    return(
      <div className='item-wrap'>
        {
          this.state.data.length==0 ? <Loading/> :
            <div className='post-wrap' dangerouslySetInnerHTML={{__html:marked(this.state.data)}} />
        }
      </div>
    )
  }
}

export default Item;
