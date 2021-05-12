import React, { Component } from 'react';

export default class CardRestorant extends Component {
  render() {
    const {title, image, desc, onClick} = this.props;
    return (
    <div onClick={onClick}>
      {title}
      <img src={image} />
      {desc}
    </div>
    )
  }
}