import React, {Component} from 'react';
import Menu from './Menu';
import Home from './Home';

class App extends Component {
  render() {
    return(
      <div>
        <Menu />
        <Home />
      </div>
    )
  }
}

export default App;
