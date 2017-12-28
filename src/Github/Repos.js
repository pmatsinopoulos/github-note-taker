import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Repos extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
  };

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
