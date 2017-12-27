import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: {},
      repos: [],
      notes: []
    }
  }

  render() {
    const username = this.props.match.params.username;
    return (
      <div className="row">
        <div className="col-md-4">
          User Profile Component for user {username}
        </div>

        <div className="col-md-4">
          Repos Component
        </div>

        <div className="col-md-4">
          Notes Component
        </div>
      </div>
    );
  }
}

export default Profile;
