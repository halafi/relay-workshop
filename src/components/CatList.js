import React, { Component } from 'react';

import { createPaginationContainer, graphql } from 'react-relay';

import CatContainer from './CatContainer';
import CreateForm from './CreateForm';

class CatList extends Component {
  loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }
    this.props.relay.loadMore(1, e => {
      console.log(e);
    });
  };
  render() {
    return (
      <main className="mw6 center mt5">
        <h1 className="mw6 ">Cat Hotel Manager</h1>
        <h3 className="mt5">Current residents</h3>
        {this.props.viewer.allCats.edges.map(({ node }) => (
          <CatContainer key={node.__id} cat={node} />
        ))}
        {this.props.relay.hasMore() && (
          <button
            className={'f6 bg-purple ba b--black-10 dim pointer pv1 white mv2 '}
            onClick={() => this.loadMore()}
          >
            Show me what you cat
          </button>
        )}
        <CreateForm />
      </main>
    );
  }
}

export default createPaginationContainer(
  CatList,
  graphql`
    fragment CatList_viewer on Viewer {
      allCats(first: $count, after: $cursor)
        @connection(key: "CatList_allCats", filters: []) {
        edges {
          node {
            ...CatContainer_cat
          }
        }
      }
    }
  `,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allCats;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
      query CatListPaginationQuery($count: Int!, $cursor: String) {
        viewer {
          ...CatList_viewer
        }
      }
    `
  }
);
