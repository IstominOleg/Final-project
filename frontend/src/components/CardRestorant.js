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
      </div>
      <div>
        {desc}
      </div>
    </div>
    )
  }
}