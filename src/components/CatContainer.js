import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import updateCat from '../mutations/updateCat';
import deleteCat from '../mutations/deleteCat';

import Cat from './Cat';

class CatContainer extends Component {
  toggleFollow = () => {
    updateCat(this.props.cat.id, !this.props.cat.isShwifty);
  };
  handleDelete = () => {
    deleteCat(this.props.viewerId, this.props.cat.id);
  };
  render() {
    return (
      <Cat
        cat={this.props.cat}
        toggleFollow={this.toggleFollow}
        handleDelete={this.handleDelete}
      />
    );
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
      isShwifty
    }
  `
);
