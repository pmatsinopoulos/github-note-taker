import React, {Component} from 'react';

class Repos extends Component {
  render() {
    return(
      <div>
        <p>REPOOOOOS</p>
        {
          this.props.repos.map((repo, index) => (repo))
        }
      </div>
    )
  }
}

export default Repos;
