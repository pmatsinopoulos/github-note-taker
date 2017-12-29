import React from 'react';
import NotesList from './NotesList';
import PropTypes from 'prop-types';
import AddNote from './AddNote';

const Notes = ({onAddNote, notes}) => {
  const addNote = (note) => {
    onAddNote(note);
  };

  return (
    <div>
      <h3>Notes</h3>
      <AddNote onAddNote={addNote}/>
      <NotesList notes={notes}/>
    </div>
  )
};

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  onAddNote: PropTypes.func.isRequired
};

export default Notes;
