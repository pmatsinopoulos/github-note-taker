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
        <ul className="list-group">
          {
            this.props.repos.map((repo, index) => (
              <li className="list-group-item" key={index}>
                {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                {repo.description && <p>{repo.description}</p>}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Repos;
