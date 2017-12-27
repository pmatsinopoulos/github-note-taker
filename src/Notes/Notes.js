import React, {Component} from 'react';

class Notes extends Component {
  render() {
    return(
      <div>
        <p>Notes</p>

        <p>
          {this.props.notes.map((note, index) => note)}
        </p>
      </div>
    )
  }
}

export default Notes;
