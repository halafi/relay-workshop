import React, { Component } from 'react';

import CreateForm from './CreateForm';
import createCat from '../mutations/createCat';

class CreateFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { fullName: '', nickname: '', imageUrl: '' };
  }
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleCreate = e => {
    const { fullName, nickname, imageUrl } = this.state;
    createCat(this.props.viewerId, { fullName, nickname, imageUrl });
    this.setState({ fullName: '', nickname: '', imageUrl: '' });
    e.preventDefault();
  };
  render() {
    return (
      <CreateForm
        submit={this.handleCreate}
        handleInputChange={this.handleInputChange}
        imageUrl={this.state.imageUrl}
        nickname={this.state.nickname}
        fullName={this.state.fullName}
      />
    );
  }
}

export default CreateFormContainer;
