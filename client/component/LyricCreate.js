import { graphql } from "react-apollo";
import gql from "graphql-tag";
import React, { Component } from "react";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
    });
    this.setState({ content: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
            onChange={(event) => this.setState({ content: event.target.value })}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyrics($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
          id
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
