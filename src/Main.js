import React from 'react';
import {Route, Switch} from 'react-router';
import Home from './Home';
import Profile from './Profile';

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile/:username" component={Profile}/>
      </Switch>
    </div>
  )
};

export default Main;
