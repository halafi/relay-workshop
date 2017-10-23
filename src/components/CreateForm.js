import React from 'react';

const CreateForm = ({
  submit,
  handleInputChange,
  fullName,
  imageUrl,
  nickname
}) => (
  <form className="pa4 black-80" onSubmit={submit}>
    <h2>Add new resident</h2>
    <label className="f6 b db mb2">Full Name</label>
    <input
      name="fullName"
      className="input-reset ba b--black-20 pa2 mb2 db w-100"
      type="text"
      value={fullName}
      onChange={handleInputChange}
    />
    <label className="f6 b db mb2">Nickname</label>
    <input
      name="nickname"
      className="input-reset ba b--black-20 pa2 mb2 db w-100"
      type="text"
      value={nickname}
      onChange={handleInputChange}
    />
    <label className="f6 b db mb2">Avatar Url</label>
    <input
      name="imageUrl"
      className="input-reset ba b--black-20 pa2 mb2 db w-100"
      type="text"
      value={imageUrl}
      onChange={handleInputChange}
    />

    <button className="f6 bg-purple ba b--black-10 dim pointer pv1 white mv2 ">
      Accommodate
    </button>
  </form>
);

export default CreateForm;
