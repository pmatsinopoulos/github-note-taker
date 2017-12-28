import React, {Component} from 'react';
import NotesList from './NotesList';
import PropTypes from 'prop-types';
import AddNote from './AddNote';

class Notes extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    onAddNote: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    this.props.onAddNote(note);
  }

  render() {
    return(
      <div>
        <h3>Notes</h3>
        <AddNote onAddNote={this.addNote}/>
        <NotesList notes={this.props.notes}/>
      </div>
    )
  }
}

export default Notes;
