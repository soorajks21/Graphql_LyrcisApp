import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./component/App";
import SongList from "./component/SongList";
import SongCreate from "./component/SongCreate";
import SongDetail from "./component/SongDetail";

const cache = new InMemoryCache();

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  cache,
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SongList} />
          <Route path='songs/new' component={SongCreate} />
          <Route path='songs/:id' component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
