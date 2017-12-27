import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import Home from './Home';
import Profile from './Profile';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/profile/:username" component={Profile}/>
        </Switch>
      </div>
    )
  }
}

export default Main;
