import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddNote extends Component {
  static propTypes = {
    onAddNote: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.note = '';
    this.addNote = this.addNote.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  addNote (e) {
    e.preventDefault();
    this.props.onAddNote(this.note.value);
    this.note.value = '';
  }

  setRef(input) {
    this.note = input
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input type="text" placeholder="add a note" className="form-control" ref={this.setRef}/>
          <button className="btn btn-default" onClick={this.addNote}>Add</button>
        </div>
      </form>
    )
  }
}

export default AddNote;
