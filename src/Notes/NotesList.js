import React from 'react';
import PropTypes from 'prop-types';

const NotesList = ({notes}) => {
  return (
    <ul className="list-group">
      {
        notes.map((note, index) =>
          <li className="list-group-item" key={index}>
            {note}
          </li>
        )
      }
    </ul>
  )
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NotesList;
