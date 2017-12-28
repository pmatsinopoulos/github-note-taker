import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    bio: PropTypes.object.isRequired
  };

  render() {
    return(
      <div>
        <h3>User Profile</h3>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio.name} </p>
        {this.props.bio.avatar_url && <li className="list-group-item"><img src={this.props.bio.avatar_url} alt="avatar of user" className="img-responsive"/></li>}
      </div>

    )
  }
}

export default UserProfile;
