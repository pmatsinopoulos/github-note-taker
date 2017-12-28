import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchGithub extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.searchTerm = '';
    this.setRef = this.setRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setRef(input) {
    this.searchTerm = input;
  }

  handleSubmit() {
    const username = this.searchTerm.value;
    this.searchTerm.value = '';

    const newPath = `/profile/${username}`;
    this.context.router.history.push(newPath);
  }

  render () {
    return(
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.setRef}/>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-primary btn-block">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchGithub;
