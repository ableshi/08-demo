import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App.js';
import Home from './Home';
import Blog from './Blog';
import Work from './Work';
import About from './About';
class Routers extends React.Component {
  render () {
    return(
        <Router history={hashHistory}>
          <Router path='/' component={App}>
            <IndexRoute component={Home} />
            <Router path='Blog' component={Blog} />
            <Router path='Work' component={Work} />
            <Router path='About' component={About} />
          </Router>
        </Router>
    )
  }
}

export default Routers;
