import React, { Component } from 'react';

export default class CardRestorant extends Component {
  render() {
    const {title, image, desc, onClick} = this.props;
    return (
    <div className="card" onClick={onClick}>
      <div>
        {title}
      </div>
      <div>
        <img className="img_pizza" src={image} alt="" />
      </div>
      <div>
        {desc}
      </div>
    </div>
    )
  }
}