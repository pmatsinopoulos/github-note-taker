import React, {Component} from 'react';
import UserProfile from "./Github/UserProfile";
import Repos from "./Github/Repos";
import Notes from "./Notes/Notes";
import base from "./base";
import getGithubInfo from "./utils/helpers";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: {name: 'foo-name'},
      repos: [1, 2, 3],
      notes: []
    };
    this.onAddNote = this.onAddNote.bind(this);
  }

  init(username) {
    // This is a two way binding
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

    getGithubInfo(username)
      .then((data) => {
        this.setState({bio: data.bio, repos: data.repos});
      })

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps(newProps) {
    console.log("Profile::componentWillReceiveProps(): ", newProps);
    if (newProps.match.params.username !== this.props.match.params.username) {
      base.removeBinding(this.ref);
      this.init(newProps.match.params.username);
    }
  }

  onAddNote(note) {
    this.setState({
      ...this.state,
      notes: [...this.state.notes, note]
    });
  }

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
          <Notes username={username} notes={notes} onAddNote={this.onAddNote}/>
        </div>
      </div>
    );
  }
}

export default Profile;
