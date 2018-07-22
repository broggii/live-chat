import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends Component {
  static propTypes = {
    comments: PT.arrayOf(PT.string),
  };
  static defaultProps = {
    comments: [],
  };
  state = {
    comment: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.comments.map(comment => (
            <li key={Math.random()}>{comment}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
            name="comment"
            id="comment"
            rows="2"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments: comments.all });

export default connect(
  mapStateToProps,
  actions
)(App);
