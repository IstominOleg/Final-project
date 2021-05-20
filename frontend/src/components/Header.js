import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
    <div className="header">
      <div>
        <Link to="/">
          <div className="logo">Order food</div>
        </Link>
      </div>
      <div>
       {this.props.title}
      </div>
      <div>
        <Link to="/basket">
          <img className="basket" src="https://img.icons8.com/pastel-glyph/2x/shopping-basket-2--v2.png" alt="Basket"/>
          {this.props.basket && this.props.basket.length > 0 ? this.props.basket.length : ""}
        </Link>
      </div>
    </div>
    )
  }
}