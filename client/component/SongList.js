import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSong";

const SongList = (props) => {
  const onDeleteSong = (id) => {
    props.mutate({ variables: { id } }).then(() => props.data.refetch());
  };
  return (
    <div>
      <ul className='collection'>
        {!props.data.loading &&
          props.data.songs.map(({ id, title }) => {
            return (
              <li key={id} className='collection-item'>
                <Link to={`/songs/${id}`}>
                {title}
                </Link>
                <i className='material-icons' onClick={() => onDeleteSong(id)}>
                  delete
                </i>
              </li>
            );
          })}
      </ul>
      <Link to='/songs/new' className='btn-floating btn-large red right'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
