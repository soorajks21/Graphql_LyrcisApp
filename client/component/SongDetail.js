import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/fetchSongDetails";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
  render() {
    const { loading, song } = this.props.data; 

    return (
      <div>
        <Link to='/'>Back </Link>
        {!loading ? <h3>{song.title}</h3> : <h1>loading</h1>}
        {!loading && <LyricList lyrics={song.lyrics} />}
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(query, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
