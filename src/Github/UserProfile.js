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
      </div>

    )
  }
}

export default UserProfile;
