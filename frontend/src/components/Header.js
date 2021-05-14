import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
    <div className="header">
      <div>
        <Link to="/">
          лого
          <img className="logo" src="https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png" alt="Logo"/>
        </Link>
      </div>
      <div>
       {this.props.title}
      </div>
      <div>
        <Link to="/basket">
          Корзина
          <img className="basket" src="https://img1.freepng.ru/20171220/jpe/shopping-cart-png-5a3a8fca5f1485.3449050215137873383895.jpg" alt="Basket"/>
        </Link>
      </div>
    </div>
    )
  }
}