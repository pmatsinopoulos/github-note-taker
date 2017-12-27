import React, {Component} from 'react';

class NotesList extends Component {
  render() {
    return(
      <ul className="list-group">
        {
          this.props.notes.map((note, index) =>
            <li className="list-group-item" key={index}>
              {note}
            </li>
          )
        }
      </ul>
    )
  }
}

export default NotesList;