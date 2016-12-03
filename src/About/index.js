import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'


class About extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.gitname.getValue)
    this.refs.form.reset
  }
  render () {
    return(
      <div className='about-warp'>
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField ref='gitname' hintText="github username"  underlineFousStyle={{borderColor:'red'}}/>
            <RaisedButton  label="Secondary" secondary={true} style={{marginLeft:'10px'}} />
          </form>
        </div>
      </div>
    )
  }
}

export default About;
