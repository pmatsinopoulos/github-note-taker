import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({username, bio}) => {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Username: {username}</p>
      <p>Bio: {bio.name} </p>
      {bio.avatar_url &&
      <li className="list-group-item"><img src={bio.avatar_url} alt="avatar of user"
                                           className="img-responsive"/></li>}
    </div>

  )
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.object.isRequired
};

export default UserProfile;
