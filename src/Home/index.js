import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    return(
      <div className='home-warp'>
        <div className='home-cover'>
          <div className='home-item'>
            <h2>Hi,我是ableshi,欢迎来到我的主页！</h2>
            <p>点击下面的按钮了解更多</p>
            <button type='button' className='btn btn-primary'>
              <a href='http://ableshi.github.io' style={{color:'#fff'}}>Click me</a> 
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
