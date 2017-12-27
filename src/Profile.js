import React, {Component} from 'react';
import UserProfile from "./Github/UserProfile";
import Repos from "./Github/Repos";
import Notes from "./Notes/Notes";
import base from "./base";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: {name: 'foo-name'},
      repos: [1, 2, 3],
      notes: []
    }
  }

  init(username) {
    this.ref = base.syncState(
      `/github/${username}`, {
        context: this,
        asArray: true,
        state: 'notes'
      });
  }
  
  componentDidMount() {
    const {username} = this.props.match.params;
    this.init(username);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  // TODO: We may need to implement the lifecycle for componentWillReceiveProps() see: https://github.com/tylermcginnis/re-base/blob/master/examples/firebase/github-notetaker/app/components/Profile.js

  render() {
    const username = this.props.match.params.username;
    const {bio, repos, notes} = this.state;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={bio}/>
        </div>

        <div className="col-md-4">
          <Repos username={username} repos={repos}/>
        </div>

        <div className="col-md-4">
          <Notes username={username} notes={notes}/>
        </div>
      </div>
    );
  }
}

export default Profile;
