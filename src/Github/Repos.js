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
        <h3>Repos</h3>
        {
          this.props.repos.map((repo, index) => (
            <div key={index}>
              {repo.name}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Repos;
