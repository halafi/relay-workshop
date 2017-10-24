import React from 'react';

const Cat = ({ cat, toggleFollow, handleDelete }) => (
  <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
    <div className="dtc w2 w3-ns v-mid">
      <img
        src={cat.imageUrl}
        className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
        alt="Cat"
      />
    </div>
    <div className="dtc v-mid pl3">
      <h1 className="f6 f5-ns fw6 lh-title black mv0">{cat.fullName} </h1>
      <h2 className="f6 fw4 mt0 mb0 black-60">@{cat.nickname}</h2>
    </div>
    <div className="dtc v-mid">
      <div className="w-100 tr">
        <button
          onClick={toggleFollow}
          className={`f6 button-reset ${cat.isShwifty
            ? 'bg-blue'
            : 'bg-white'} ba b--black-10 dim pointer pv1 ${cat.isShwifty
            ? 'white'
            : 'black-60'} `}
        >
          {cat.isShwifty ? 'Shwifty' : 'Get Shwifty'}
        </button>{' '}
        <button
          onClick={handleDelete}
          className="f6 button-reset bg-dark-red white ba b--black-10 dim pointer pv1"
        >
          Kick out
        </button>
      </div>
    </div>
  </article>
);

export default Cat;
