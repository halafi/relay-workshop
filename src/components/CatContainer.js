import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import updateCat from '../mutations/updateCat';

import Cat from './Cat';

class CatContainer extends Component {
  toggleFollow = () => {
    updateCat(this.props.cat.id, !this.props.cat.isFollowed);
  };
  render() {
    return <Cat cat={this.props.cat} toggleFollow={this.toggleFollow} />;
  }
}

export default createFragmentContainer(
  CatContainer,
  graphql`
    fragment CatContainer_cat on Cat {
      id
      nickname
      fullName
      imageUrl
      isFollowed
    }
  `
);
