import React, { Component } from 'react';
import Header from './Header';

export default class Restorant extends Component {
  state = {

  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const {restaurant_id} = this.props.match.params;
    let name;
    if (restaurant_id === "pizza") {
      name = "Пиццерия"
    } else if (restaurant_id === "sushi") {
      name = "Суши чето там"
    } else if (restaurant_id === "chicken") {
      name = "Про куриыу ресторан"
    }
    return (
    <div>
      <Header title={name} />
    </div>
    )
  }
}