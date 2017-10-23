import React from 'react';

import { createFragmentContainer, graphql } from 'react-relay';

import CatContainer from './CatContainer';

class CatList extends React.Component {
  render() {
    return (
      <main className="mw6 center">
        {this.props.viewer.allCats.edges.map(({ node }) => (
          <CatContainer key={node.__id} cat={node} />
        ))}
      </main>
    );
  }
}

export default createFragmentContainer(
  CatList,
  graphql`
    fragment CatList_viewer on Viewer {
      allCats(last: 3) @connection(key: "CatList_allCats", filters: []) {
        edges {
          node {
            ...CatContainer_cat
          }
        }
      }
    }
  `
);
