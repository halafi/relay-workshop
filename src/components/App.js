import React, { Component } from 'react';

import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';

import CatList from './CatList';

const AppAllCatsQuery = graphql`
  query AppAllCatQuery($count: Int!, $cursor: String) {
    viewer {
      id
      ...CatList_viewer
    }
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppAllCatsQuery}
        variables={{ count: 1 }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <CatList viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default App;
