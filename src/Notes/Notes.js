import React, {Component} from 'react';
import NotesList from './NotesList';
import PropTypes from 'prop-types';

class Notes extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired
  };
  render() {
    return(
      <div>
        <h3>Notes for {this.props.username}</h3>
        <NotesList notes={this.props.notes}/>
      </div>
    )
  }
}

export default Notes;
