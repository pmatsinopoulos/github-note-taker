import React, {Component} from 'react';
import SearchGithub from "./SearchGithub";

class Menu extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub/>
        </div>
      </nav>
    )
  }
}

export default Menu;
