import React from 'react';

import { createFragmentContainer, graphql } from 'react-relay';

import Cat from './Cat';

class CatList extends React.Component {
  render() {
    return (
      <main className="mw6 center">
        {this.props.viewer.allCats.edges.map(({ node }) => (
          <Cat key={node.__id} cat={node} />
        ))}
      </main>
    );
  }
}

export default createFragmentContainer(
  CatList,
  graphql`
    fragment CatList_viewer on Viewer {
      allCats(last: 100) @connection(key: "CatList_allCats", filters: []) {
        edges {
          node {
            ...Cat_cat
          }
        }
      }
    }
  `
);
