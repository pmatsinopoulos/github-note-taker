import React from 'react';
import PropTypes from 'prop-types';

const AddNote = ({onAddNote}) => {
  const addNote = (e) => {
    e.preventDefault();
    onAddNote(this.note.value);
    this.note.value = '';
  };

  const setRef = (input) => {
    this.note = input
  };

  return (
    <form className="form-inline">
      <div className="form-group">
        <input type="text" placeholder="add a note" className="form-control" ref={setRef}/>
        <button className="btn btn-default" onClick={addNote}>Add</button>
      </div>
    </form>
  )
};

AddNote.propTypes = {
  onAddNote: PropTypes.func.isRequired
};

export default AddNote;
